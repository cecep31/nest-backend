import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
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
  @Post('auth/login')
  async login(@Request() req) {
    return this.authservice.Login(req);
  }
}
