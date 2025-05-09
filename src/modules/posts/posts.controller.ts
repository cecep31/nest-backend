import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { SupeAdminGuard } from '../auth/superadmin.guard';
import { AuthGuard } from '../auth/auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { query } from 'winston';

@Controller({
  version: '1',
  path: 'posts',
})
export class PostsController {
  constructor(private postsService: PostsService) { }

  @Get()
  async findAll(
    @Param('offset') offset: number = 0,
    @Param('limit') limit: number = 10,
  ) {
    const { metadata, postsData } = await this.postsService.posts({ offset, limit })
    return {
      success: true,
      message: 'Successfully fetched posts',
      data: postsData,
      metadata
    };
  }

  @Get('u/:username/:slug')
  async getByUsernameAndSlug(
    @Param('username') username: string,
    @Param('slug') slug: string,
  ) {
    return {
      success: true,
      message: 'Successfully fetched post',
      data: await this.postsService.getByUsernameAndSlug(username, slug),
    };
  }

  @Get('/random')
  async getPostRandom(@Param('limit') limit: number = 6) {
    return {
      success: true,
      message: 'Successfully fetched random posts',
      data: await this.postsService.getPostRandom(limit),
    };
  }

  @Get(':id')
  async post(@Param('id') id: string) {
    const post = await this.postsService.findById(id);
    if (!post) {
      return {
        success: false,
        message: 'Post not found',
        data: []
      };
    }
    return {
      success: true,
      message: 'Successfully fetched post',
      data: post,
    };
  }

  @UseGuards(AuthGuard, SupeAdminGuard)
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return {
      success: true,
      message: 'Successfully deleted post',
      data: await this.postsService.deletePost(id),
    };
  }

  @UseGuards(AuthGuard)
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto, @Request() req) {
    return {
      success: true,
      message: 'Successfully created post',
      data: await this.postsService.createPost(createPostDto, req.user.user_id),
    };
  }

  @UseGuards(AuthGuard, SupeAdminGuard)
  @Patch('publish')
  async updatePublishPost(@Param('id') id: string, @Query('published') published: boolean = true) {

    return {
      success: true,
      message: 'Successfully updated post',
      data: await this.postsService.updatePublishPost(id, published),
    }
  }
}
