import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma.service';
import { PostsGateway } from './posts.gateway';
import { UserSocketMapService } from './user-map-service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [ConfigModule,AuthModule],
  controllers: [PostsController],
  providers: [PostsService, PrismaService, PostsGateway, UserSocketMapService],
})
export class PostsModule { }
