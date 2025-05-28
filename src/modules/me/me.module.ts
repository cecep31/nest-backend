import { Module } from '@nestjs/common';
import { MeService } from './me.service';
import { MeController } from './me.controller';
import { PostsModule } from '../posts/posts.module';
import { PostsRepository } from '../posts/posts.repository';
import { TagsService } from '../tags/tags.service';
import { TagsModule } from '../tags/tags.module';

@Module({
  controllers: [MeController],
  providers: [MeService, PostsRepository, TagsService],
  imports: [PostsModule, TagsModule],
})
export class MeModule { }
