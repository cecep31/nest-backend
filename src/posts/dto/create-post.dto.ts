import { IsNotEmpty } from 'class-validator';
import { Users } from 'src/users/entities/user.entity';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  slug: string;

  @IsNotEmpty()
  body: string;

  createBy: Users;
}
