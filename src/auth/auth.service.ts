import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtservice: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUserName(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async Login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      issuperadmin: user.issuperadmin,
    };
    return {
      access_token: this.jwtservice.sign(payload),
    };
  }
}
