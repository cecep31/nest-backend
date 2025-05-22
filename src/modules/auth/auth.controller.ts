import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
  Req,
  Res,
  HttpStatus,
  Redirect,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { LoginDto, loginSchema } from './schemas/loogin-schema';
// import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
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

  // --- GitHub OAuth ---
  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubLogin() {
    // Redirect handled by Passport
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubCallback(@Req() req, @Res() res) {
    // Successful authentication, issue JWT and return user info
    // req.user is set by GithubStrategy.validate()
    if (!req.user) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ success: false, message: 'GitHub authentication failed' });
    }

    // set cookie
    res.cookie('access_token', req.user.access_token, {
      maxAge: 4 * 60 * 60 * 1000,
      httpOnly: false,
      secure: false,
      sameSite: 'lax',
      domain: '.pilput.me',
    });

    // You can customize the redirect or response as needed:
    // For API: return JWT and user info
    return Redirect('https://pilput.me');
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh-token')
  refreshToken(@Request() req) {
    return this.authService.refreshToken(req.user);
  }
}
