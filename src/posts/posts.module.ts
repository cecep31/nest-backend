import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsGateway } from './posts.gateway';
import { Comment_post } from './entities/commentpost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post,Comment_post])],
  controllers: [PostsController],
  providers: [PostsService, PostsGateway],
})
export class PostsModule {}
