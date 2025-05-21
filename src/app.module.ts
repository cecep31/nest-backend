import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PagesModule } from './modules/note/pages/pages.module';
import { WorkspacesModule } from './modules/note/workspaces/workspaces.module';
import configuration from './config/configuration';
import { DbModule } from './db/db.module';
import { MeModule } from './modules/me/me.module';
import { AdminModule } from './modules/admin/admin.module';
import { LoggerMiddleware } from './common/logger/logger.middleware';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston';
import { TagsModule } from './modules/tags/tags.module';
import { WriterModule } from './modules/writer/writer.module';
import { ChatModule } from './modules/chat/chat.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [
    WinstonModule.forRoot(winstonConfig),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        throttlers: [{
          ttl: config.get<number>('throttler.ttl', 60),
          limit: config.get<number>('throttler.limit', 10),
        }],
      }),
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    PagesModule,
    WorkspacesModule,
    DbModule,
    MeModule,
    AdminModule,
    TagsModule,
    WriterModule,
    ChatModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
