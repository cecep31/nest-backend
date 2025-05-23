import { Controller, Get } from '@nestjs/common';
import { MeService } from './me.service';

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) { }


  @Get("posts")
  findAll() {
    return this.meService.findAll();
  }
}
