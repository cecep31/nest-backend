import { IsEmail } from 'class-validator';

export class CreateUserDto {
  id?: string;
  username: string;

  @IsEmail()
  email: string;

  password: string;
  image: string;
}
