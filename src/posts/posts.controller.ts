import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Req,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { SupeAdminGuard } from 'src/auth/superadmin.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @UseGuards(AuthGuard, SupeAdminGuard)
  @Post()
  create(@Body() createPostDto: CreatePostDto, @Req() req: any) {
    return this.postsService.create(createPostDto, req);
  }

  @Get()
  findAll(@Req() req: Request) {
    if (req.query.random) {
      console.log("masuk random");
      return this.postsService.findRandomPost();
    }
    return this.postsService.findAll(req);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.postsService.findOnebyslug(slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @UseGuards(AuthGuard, SupeAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
