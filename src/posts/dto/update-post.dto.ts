import { IsNotEmpty } from 'class-validator';
import { Users } from 'src/users/entities/user.entity';

export class UpdatePostDto {
  id: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;

  // @IsNotEmptyObject()
  createBy: Users;
}
