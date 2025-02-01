import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { SupeAdminGuard } from '../auth/superadmin.guard';
import { AuthGuard } from '../auth/auth.guard';
import { CreatePostDto } from './dto/create-post.dto';

@Controller({
  version: '1',
  path: 'posts',
})
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(
    @Param('offset') offset: number = 0,
    @Param('limit') limit: number = 10,
  ) {
    return {
      success: true,
      message: 'All posts',
      data: await this.postsService.posts({ offset, limit }),
    };
  }

  @Get('random')
  async getPostRandom(@Param('limit') limit: number = 6) {
    return {
      success: true,
      message: 'Random post',
      data: await this.postsService.getPostRandom(limit),
    };
  }

  @Get(':id')
  async post(@Param('id') id: string) {
    return this.postsService.findById(id);
  }

  @UseGuards(AuthGuard, SupeAdminGuard)
  @Delete(':id')
  deletePosy(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }

  @UseGuards(AuthGuard, SupeAdminGuard)
  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }
}
