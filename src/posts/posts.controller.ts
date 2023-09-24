import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SupeAdminGuard } from 'src/auth/superadmin.guard';
import {posts as PostModel} from '@prisma/client'

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @UseGuards(AuthGuard, SupeAdminGuard)
  @Post()
  create(@Body() createPostDto: CreatePostDto, @Req() req: any) {
    return this.postsService.create(createPostDto, req);
  }

  @Get()
  async findAll() : Promise<PostModel[]> {
    return this.postsService.posts({});
  }


}
