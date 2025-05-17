import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

// Extend Express Request type to include user
interface RequestWithUser extends Request {
  user: {
    user_id: string;
    // Add other user properties if needed
  };
}
import { ChatService } from './services/chat.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { SendMessageDto } from './dto/send-message.dto';
import { ConversationResponseDto } from './dto/conversation-response.dto';
import { MessageResponseDto } from './dto/conversation-response.dto';

@Controller({
  path: 'chat',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('conversations')
  createConversation(
    @Req() req: RequestWithUser,
    @Body() createConversationDto: CreateConversationDto,
  ): Promise<ConversationResponseDto> {
    return this.chatService.createConversation(
      req.user.user_id,
      createConversationDto,
    );
  }

  @Post('conversations/:id/messages')
  sendMessage(
    @Req() req: RequestWithUser,
    @Param('id') conversationId: string,
    @Body() sendMessageDto: SendMessageDto,
  ): Promise<MessageResponseDto> {
    return this.chatService.sendMessage(
      req.user.user_id,
      conversationId,
      sendMessageDto,
    );
  }

  @Get('conversations')
  listConversations(@Req() req: RequestWithUser): Promise<ConversationResponseDto[]> {
    return this.chatService.listConversations(req.user.user_id);
  }

  @Get('conversations/:id')
  getConversation(
    @Req() req: RequestWithUser,
    @Param('id') conversationId: string,
  ): Promise<ConversationResponseDto> {
    return this.chatService.getConversation(req.user.user_id, conversationId);
  }

  @Delete('conversations/:id')
  deleteConversation(
    @Req() req: RequestWithUser,
    @Param('id') conversationId: string,
  ): Promise<void> {
    return this.chatService.deleteConversation(req.user.user_id, conversationId);
  }
}
