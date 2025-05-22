import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, Observable } from 'rxjs';
import OpenAI from 'openai';
import type { Stream } from 'openai/streaming';
import {
  OpenRouterMessage,
  OpenRouterRequest,
  OpenRouterResponse,
  OpenRouterErrorResponse,
} from '../interfaces/openrouter.types';

interface OpenRouterConfig {
  apiKey: string;
  baseUrl: string;
  defaultModel: string;
  maxTokens: number;
  temperature: number;
}

@Injectable()
export class OpenRouterService {
  /**
   * Stream chat completion from OpenRouter as Observable<string> (each chunk is a partial message)
   */
  createChatCompletionStream(
    messages: OpenRouterMessage[],
    options: {
      model?: string;
      temperature?: number;
      maxTokens?: number;
    } = {},
  ): Observable<string> {
    const {
      model = this.config.defaultModel,
      temperature = this.config.temperature,
      maxTokens = this.config.maxTokens,
    } = options;

    // Map OpenRouterMessage to OpenAI message format if needed
    const openaiMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Initialize OpenAI client if not already
    const openai = new OpenAI({
      apiKey: this.config.apiKey,
      baseURL: this.config.baseUrl,
    });

    return new Observable<string>((observer) => {
      (async () => {
        try {
          const stream: Stream<OpenAI.Chat.Completions.ChatCompletionChunk> =
            await openai.chat.completions.create({
              model,
              messages: openaiMessages,
              temperature,
              max_tokens: maxTokens,
              stream: true,
            });

          for await (const chunk of stream) {
            const content = chunk.choices?.[0]?.delta?.content;
            if (content) {
              observer.next(content);
            }
          }
          observer.complete();
        } catch (err) {
          observer.error(err);
        }
      })();
    });
  }
  private readonly logger = new Logger(OpenRouterService.name);
  private readonly config: OpenRouterConfig;

  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.config = this.configService.get<OpenRouterConfig>('openrouter', {
      apiKey: '',
      baseUrl: 'https://openrouter.ai/api/v1',
      defaultModel: 'openai/gpt-3.5-turbo',
      maxTokens: 4000,
      temperature: 0.7,
    });
  }

  async createChatCompletion(
    messages: OpenRouterMessage[],
    options: {
      model?: string;
      temperature?: number;
      maxTokens?: number;
    } = {},
  ): Promise<OpenRouterResponse> {
    const {
      model = this.config.defaultModel,
      temperature = this.config.temperature,
      maxTokens = this.config.maxTokens,
    } = options;

    const data: OpenRouterRequest = {
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post<OpenRouterResponse>(
          `${this.config.baseUrl}/chat/completions`,
          data,
          {
            headers: {
              Authorization: `Bearer ${this.config.apiKey}`,
              'Content-Type': 'application/json',
            },
          },
        ),
      );

      return response.data;
    } catch (error: any) {
      this.logger.error('Error calling OpenRouter API:', error);

      if (error.response?.data) {
        const errorData = error.response.data as OpenRouterErrorResponse;
        throw new Error(
          `OpenRouter API error: ${errorData.error?.message || 'Unknown error'}`,
        );
      }

      throw new Error('Failed to get response from OpenRouter API');
    }
  }
}
