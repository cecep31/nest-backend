import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma.service';
import { PostsGateway } from './posts.gateway';
@Module({
  // imports: [PostsService],
  controllers: [PostsController],
  providers: [PostsService,PrismaService,PostsGateway],
})
export class PostsModule {}
