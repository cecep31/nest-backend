import {
  Controller,
  Get,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { posts as PostModel } from '@prisma/client'

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }


  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.posts({});
  }


}
