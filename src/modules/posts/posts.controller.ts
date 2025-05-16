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
import { SuperAdminGuard } from '../auth/guards/superadmin.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

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
  @Get("mine")
  @UseGuards(JwtAuthGuard)
  async getPostsByCreator(@Request() req, @Param('offset') offset: number = 0, @Param('limit') limit: number = 10) {
    const { metadata, posts } = await this.postsService.getPostsMine(req.user.user_id, offset, limit);
    return {
      success: true,
      message: 'Successfully fetched posts',
      data: posts,
      metadata
    }
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

  @UseGuards(JwtAuthGuard, SuperAdminGuard)
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return {
      success: true,
      message: 'Successfully deleted post',
      data: await this.postsService.deletePost(id),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto, @Request() req) {
    return {
      success: true,
      message: 'Successfully created post',
      data: await this.postsService.createPost(createPostDto, req.user.user_id),
    };
  }

  @UseGuards(JwtAuthGuard, SuperAdminGuard)
  @Patch('publish')
  async updatePublishPost(@Param('id') id: string, @Query('published') published: boolean = true) {
    return {
      success: true,
      message: 'Successfully updated post',
      data: await this.postsService.updatePublishPost(id, published),
    }
  }


}
