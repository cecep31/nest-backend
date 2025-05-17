import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DbModule } from '../../db/db.module';
import { ChatController } from './chat.controller';
import { ChatService } from './services/chat.service';
import { OpenRouterService } from './services/openrouter.service';

@Module({
  imports: [
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
