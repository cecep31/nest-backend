import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../db/prisma.service';
import { OpenRouterService } from './openrouter.service';
import { CreateConversationDto } from '../dto/create-conversation.dto';
import { SendMessageDto } from '../dto/send-message.dto';
import {
  ConversationResponseDto,
  MessageResponseDto,
} from '../dto/conversation-response.dto';

@Injectable()
export class ChatService {
  /**
   * Stream AI response as Observable<string> for SSE
   */
  streamMessage(
    userId: string,
    conversationId: string,
    sendMessageDto: SendMessageDto
  ): Observable<string> {
    return new Observable<string>(observer => {
      (async () => {
      // Verify conversation exists and belongs to user
      const conversation = await this.prisma.chat_conversations.findUnique({
        where: { id: conversationId, user_id: userId },
      });
      if (!conversation) {
        observer.error(new NotFoundException('Conversation not found'));
        return;
      }
      // Get previous messages for context
      const previousMessages = await this.prisma.chat_messages.findMany({
        where: { conversation_id: conversationId },
        orderBy: { created_at: 'asc' },
        take: 10,
      });
      const messages = [
        ...previousMessages.map((msg) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        })),
        { role: 'user' as const, content: sendMessageDto.content },
      ];
      // Stream from OpenRouterService
      this.openRouterService.createChatCompletionStream(messages, {
        model: sendMessageDto.model,
        temperature: sendMessageDto.temperature,
      }).subscribe({
        next: chunk => observer.next(chunk),
        error: err => observer.error(err),
        complete: () => observer.complete(),
      });
    })();
  });
  }
  private readonly logger = new Logger(ChatService.name);
  private readonly defaultModel: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly openRouterService: OpenRouterService,
    private readonly configService: ConfigService,
  ) {
    this.defaultModel =
      this.configService.get('openrouter.defaultModel') ||
      'deepseek/deepseek-prover-v2:free';
  }

  async createConversation(
    userId: string,
    createConversationDto: CreateConversationDto,
  ): Promise<ConversationResponseDto> {
    const { title, message } = createConversationDto;

    // Create conversation in database
    const conversation = await this.prisma.chat_conversations.create({
      data: {
        title: title || 'New Conversation',
        user_id: userId,
      },
    });

    // Add the initial message
    const userMessage = await this.prisma.chat_messages.create({
      data: {
        conversation_id: conversation.id,
        user_id: userId,
        role: 'user',
        content: message,
      },
    });

    // Get AI response
    const aiResponse = await this.getAiResponse(userId, conversation.id, [
      { role: 'user', content: message },
    ]);

    return this.formatConversationResponse(conversation, [
      {
        ...userMessage,
        model: null,
        prompt_tokens: null,
        completion_tokens: null,
        total_tokens: null,
        conversation_id: conversation.id,
      },
      aiResponse,
    ]);
  }

  async sendMessage(
    userId: string,
    conversationId: string,
    sendMessageDto: SendMessageDto,
  ): Promise<MessageResponseDto> {
    // Verify conversation exists and belongs to user
    const conversation = await this.prisma.chat_conversations.findUnique({
      where: { id: conversationId, user_id: userId },
    });

    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }

    // Get previous messages for context
    const previousMessages = await this.prisma.chat_messages.findMany({
      where: { conversation_id: conversationId },
      orderBy: { created_at: 'asc' },
      take: 10, // Limit context to last 10 messages
    });

    // Format messages for AI
    const messages = [
      ...previousMessages.map((msg) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user' as const, content: sendMessageDto.content },
    ];

    // Get AI response
    const aiResponse = await this.getAiResponse(
      userId,
      conversationId,
      messages,
      {
        model: sendMessageDto.model,
        temperature: sendMessageDto.temperature,
      },
    );

    return aiResponse;
  }

  async getConversation(
    userId: string,
    conversationId: string,
  ): Promise<ConversationResponseDto> {
    const conversation = await this.prisma.chat_conversations.findUnique({
      where: { id: conversationId, user_id: userId },
      include: {
        messages: {
          orderBy: { created_at: 'asc' },
        },
      },
    });

    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }

    return this.formatConversationResponse(conversation, conversation.messages);
  }

  async listConversations(userId: string): Promise<ConversationResponseDto[]> {
    const conversations = await this.prisma.chat_conversations.findMany({
      where: { user_id: userId },
      include: {
        messages: {
          orderBy: { created_at: 'desc' },
          take: 1, // Only get the latest message for the list
        },
      },
      orderBy: { updated_at: 'desc' },
    });

    return conversations.map((conv) =>
      this.formatConversationResponse(conv, conv.messages),
    );
  }

  async deleteConversation(
    userId: string,
    conversationId: string,
  ): Promise<void> {
    await this.prisma.$transaction([
      this.prisma.chat_messages.deleteMany({
        where: { conversation_id: conversationId },
      }),
      this.prisma.chat_conversations.deleteMany({
        where: { id: conversationId, user_id: userId },
      }),
    ]);
  }

  private async getAiResponse(
    userId: string,
    conversationId: string,
    messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>,
    options: { model?: string; temperature?: number } = {},
  ): Promise<MessageResponseDto> {
    try {
      const response = await this.openRouterService.createChatCompletion(
        messages,
        {
          model: options.model || this.defaultModel,
          temperature: options.temperature,
        },
      );
      
      const aiMessage = response.choices[0]?.message;
      const usage = response.usage;

      if (!aiMessage) {
        throw new Error('No response from AI');
      }

      // Save AI response to database
      const savedMessage = await this.prisma.chat_messages.create({
        data: {
          conversation_id: conversationId,
          user_id: userId, // Associate AI response with the user
          role: 'assistant',
          content: aiMessage.content,
          model: response.model,
          prompt_tokens: usage?.prompt_tokens || null,
          completion_tokens: usage?.completion_tokens || null,
          total_tokens: usage?.total_tokens || null,
        },
      });

      // Update conversation's updated_at timestamp
      await this.prisma.chat_conversations.update({
        where: { id: conversationId },
        data: { updated_at: new Date() },
      });

      return this.formatMessageResponse(savedMessage);
    } catch (error) {
      this.logger.error('Error getting AI response:', error);
      throw new Error('Failed to get AI response');
    }
  }

  private formatMessageResponse(message: any): MessageResponseDto {
    return {
      id: message.id,
      role: message.role as 'user' | 'assistant' | 'system',
      content: message.content,
      model: message.model || undefined,
      promptTokens: message.prompt_tokens || undefined,
      completionTokens: message.completion_tokens || undefined,
      totalTokens: message.total_tokens || undefined,
      createdAt: message.created_at,
    };
  }

  private formatConversationResponse(
    conversation: any,
    messages: any[],
  ): ConversationResponseDto {
    return {
      id: conversation.id,
      title: conversation.title,
      workspaceId: conversation.workspace_id || undefined,
      messages: messages.map((msg) => this.formatMessageResponse(msg)),
      createdAt: conversation.created_at,
      updatedAt: conversation.updated_at,
    };
  }
}
