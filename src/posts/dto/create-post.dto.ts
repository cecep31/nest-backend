import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { Users } from 'src/users/entities/user.entity';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;

  // @IsNotEmptyObject()
  createBy: Users;
}
