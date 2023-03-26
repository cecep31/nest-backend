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
  @Post('auth/login')
  async login(@Req() req) {
    const user = await this.authservice.validateUser(
      req.body.username,
      req.body.password,
    );
    if (user) {
      return this.authservice.Login(user);
    } else {
      return 'wkwkw';
    }
  }
}
