import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  /**
   * Validate or register user via OAuth provider (GitHub)
   */
  async validateOAuthLogin({
    provider,
    providerId,
    username,
    email,
    photo,
    accessToken,
  }: {
    provider: string;
    providerId: string;
    username: string;
    email?: string;
    photo?: string;
    accessToken?: string;
  }) {
    // Try to find user by email or username
    let user = email
      ? await this.userService.findByEmailOrUsername(email)
      : null;

    // If still not found, create new user
    if (!user) {
      // try if username is already taken
      try {
        user = await this.userService.create({
          username: username || provider + '_' + providerId,
          email: email || `${providerId}@${provider}.oauth`,
          password: providerId, // Not used, just a placeholder
          image: photo,
        });
      } catch (error) {
        user = await this.userService.create({
          username: provider + '_' + providerId,
          email: email || `${providerId}@${provider}.oauth`,
          password: providerId, // Not used, just a placeholder
          image: photo,
        });
      }

      if (!user) {
        throw new Error('User not found');
      }
    }

    // Generate JWT payload
    const payload = {
      user_id: user?.id,
      email: user?.email,
      isSuperAdmin: user?.is_super_admin,
      username: user?.username,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user?.id,
        email: user?.email,
        username: user?.username,
        image: user?.image,
      },
    };
  }

  comparePassword(hash: string, password: string) {
    return compare(password, hash);
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmailOrUsername(email);

    if (!user) {
      return null;
    }

    const isPasswordValid = await this.comparePassword(
      user.password ?? '',
      password,
    );
    if (!isPasswordValid) {
      return null;
    }

    const { password: _, ...result } = user;
    return result;
  }

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = {
      user_id: user.id,
      email: user.email,
      isSuperAdmin: user.is_super_admin,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    };
  }

  async verifyToken(token: string) {
    return await this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>('jwt_secret'),
    });
  }

  // refresh token
  async refreshToken(payload: any) {
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  profile(user: any) {
    return this.userService.findOne(user.id);
  }
}
