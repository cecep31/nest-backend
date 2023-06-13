import { Controller, Get, Post, Request } from '@nestjs/common';
import { Req, Res } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authservice: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}
