import { Controller, Get, Param } from '@nestjs/common';
import { WriterService } from './writer.service';

@Controller({
  path: 'writers',
  version: '1',
})
export class WriterController {
  constructor(private readonly writerService: WriterService) {}

  @Get(':username')
  async getWriterByUserName(@Param('username') username: string) {
    const writer = await this.writerService.getWriterByUserName(username);
    return {
      message: 'Writer fetched successfully',
      status: true,
      data: writer,
    };
  }
}
