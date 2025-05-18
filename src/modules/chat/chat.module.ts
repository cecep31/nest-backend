import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { DbModule } from '../../db/db.module';
import { ChatController } from './chat.controller';
import { ChatService } from './services/chat.service';
import { OpenRouterService } from './services/openrouter.service';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 1000, // 1 second
        limit: 5,
      },
      {
        ttl: 10000, // 10 seconds
        limit: 20,
      },
      {
        ttl: 60000, // 1 minute
        limit: 100,
      },
    ]),
    DbModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: 30000, // 30 seconds
        maxRedirects: 5,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ChatController],
  providers: [ChatService, OpenRouterService],
  exports: [ChatService],
})
export class ChatModule {}
