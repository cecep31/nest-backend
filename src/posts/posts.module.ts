import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma.service';
import { PostsGateway } from './posts.gateway';
import { UserSocketMapService } from './user-map-service';
@Module({
  // imports: [PostsService],
  controllers: [PostsController],
  providers: [PostsService, PrismaService, PostsGateway, UserSocketMapService],
})
export class PostsModule { }
