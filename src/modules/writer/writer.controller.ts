import { Controller, Get, Param } from '@nestjs/common';
import { WriterService } from './writer.service';

@Controller({
  path: 'writers',
  version: '1',
})
export class WriterController {
  constructor(private readonly writerService: WriterService) {}

  @Get(':username')
  getWriterByUserName(@Param('username') username: string) {
    return this.writerService.getWriterByUserName(username);
  }
}
