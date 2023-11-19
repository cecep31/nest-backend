import {
  Controller,
  Delete,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { posts as PostModel } from '@prisma/client'
import { SupeAdminGuard } from 'src/auth/superadmin.guard';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.posts({});
  }

  @Get(":id")
  async post(@Param('id') id: string) {
    return this.postsService.findById(id)
  }

  @UseGuards(AuthGuard,SupeAdminGuard)
  @Delete(":id")
  deletePosy(@Param("id") id: string) {
    return this.postsService.deletePost(id)
  }


}
