import { Module } from '@nestjs/common';
import { MeService } from './me.service';
import { MeController } from './me.controller';
import { PostsModule } from '../posts/posts.module';
import { PostsRepository } from '../posts/posts.repository';

@Module({
  controllers: [MeController],
  providers: [MeService, PostsRepository],
  imports: [PostsModule],
})
export class MeModule { }
