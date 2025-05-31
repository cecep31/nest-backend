import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import OpenAI from 'openai';
import type { Stream } from 'openai/streaming';
import {
  OpenRouterMessage,
  OpenRouterResponse,
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
  private client: OpenAI;
  /**
   * Stream chat completion from OpenRouter as Observable<string> (each chunk is a partial message)
   */

  private readonly logger = new Logger(OpenRouterService.name);
  private readonly config: OpenRouterConfig;

  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
  ) {
    this.config = this.configService.get<OpenRouterConfig>('openrouter', {
      apiKey: '',
      baseUrl: 'https://openrouter.ai/api/v1',
      defaultModel: 'openai/gpt-3.5-turbo',
      maxTokens: 4000,
      temperature: 0.7,
    });
    this.client = new OpenAI({
      apiKey: this.config.apiKey,
      baseURL: this.config.baseUrl,
      defaultHeaders: {
        'HTTP-Referer': 'https://pilput.me', // Optional. Site URL for rankings on openrouter.ai.
        'X-Title': 'pilput', // Optional. Site title for rankings on openrouter.ai.
      },
    });
  }

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

    const clientMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    return new Observable<string>((observer) => {
      (async () => {
        try {
          const stream: Stream<OpenAI.Chat.Completions.ChatCompletionChunk> =
            await this.client.chat.completions.create({
              model,
              messages: clientMessages,
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

    // Map to OpenAI-compatible message format
    const clientMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    try {
      const completion = await this.client.chat.completions.create({
        model,
        messages: clientMessages,
        temperature,
        max_tokens: maxTokens,
      });
      return completion as OpenRouterResponse;
    } catch (error: any) {
      this.logger.error('Error calling chat completion endpoint:', error);
      if (error.error) {
        throw new Error(`API error: ${error.error.message || 'Unknown error'}`);
      }
      throw new Error('Failed to get response from chat completion endpoint');
    }
  }
}
