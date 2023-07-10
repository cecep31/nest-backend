import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrouptasksService } from './grouptasks.service';
import { CreateGrouptaskDto } from './dto/create-grouptask.dto';
import { UpdateGrouptaskDto } from './dto/update-grouptask.dto';

@Controller('grouptasks')
export class GrouptasksController {
  constructor(private readonly grouptasksService: GrouptasksService) {}

  @Post()
  create(@Body() createGrouptaskDto: CreateGrouptaskDto) {
    return this.grouptasksService.create(createGrouptaskDto);
  }

  @Get()
  findAll() {
    return this.grouptasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grouptasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrouptaskDto: UpdateGrouptaskDto) {
    return this.grouptasksService.update(id, updateGrouptaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grouptasksService.remove(id);
  }
}
