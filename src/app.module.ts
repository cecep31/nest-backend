import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { PrismaService } from './prisma.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60000,
      limit: 20,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule.forRoot(),
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
