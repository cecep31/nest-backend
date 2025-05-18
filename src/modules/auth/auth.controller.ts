import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { LoginDto, loginSchema } from './schemas/loogin-schema';
// import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body(new ZodValidationPipe(loginSchema)) loginDto: LoginDto) {
    console.log(loginDto);
    
    const data = await this.authService.signIn(
      loginDto.email,
      loginDto.password,
    );
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

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('profile')
  getProfile(@Request() req) {
    return this.authService.profile(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh-token')
  refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}
