import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { PostsRepository } from '../posts/posts.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ArticleController],
  providers: [ArticleService, PostsRepository],
  exports: [ArticleService],
})
export class ArticleModule {}