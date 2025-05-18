import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
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
