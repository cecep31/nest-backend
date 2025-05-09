import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { LoginDto, LoginSchema } from './dto/login-dto';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UsePipes(new ZodValidationPipe(LoginSchema))
  async signIn(@Body() signInDto: LoginDto) {
    const data = await this.authService.signIn(signInDto.email, signInDto.password);
    // return data;
    if (!data) {
      return {
        success: false,
        message: 'Invalid credentials',
      };
    }
    return {
      data,
      success: true,
      message: 'success',
    };
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('profile')
  getProfile(@Request() req) {
    return this.authService.profile(req.user);
  }

  @UseGuards(AuthGuard)
  @Post('refresh-token')
  refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}
