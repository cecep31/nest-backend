import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  comparePassword(hash: string, password: string) {
    return compare(password, hash);
  }

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const compare = await this.comparePassword(user.password, password);

    if (!compare) {
      throw new UnauthorizedException();
    }
    const payload = {
      user_id: user.id,
      email: user.email,
      issuperadmin: user.is_super_admin,
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
