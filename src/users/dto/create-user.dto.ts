import { IsEmail } from 'class-validator';

export class CreateUserDto {
  id?: number;
  username: string;

  @IsEmail()
  email: string;

  password: string;
  image: string;
}
