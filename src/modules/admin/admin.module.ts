import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PostsModule } from '../posts/posts.module';
import { PostsRepository } from '../posts/posts.repository';

@Module({
  controllers: [AdminController],
  providers: [AdminService, PostsRepository],
  imports: [PostsModule],
})
export class AdminModule { }
