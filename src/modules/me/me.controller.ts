import { Controller, Get } from '@nestjs/common';
import { MeService } from './me.service';
import { TagsService } from '../tags/tags.service';

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService, private tagService: TagsService) { }

  @Get("posts")
  findPosts() {
    return this.meService.findAll();
  }

  @Get("tags")
  findTags() {
    return this.tagService.getAllTags();
  }


}
