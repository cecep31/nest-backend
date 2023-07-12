import { IsNotEmpty } from 'class-validator';
import { Grouptask } from 'src/grouptasks/entities/grouptask.entity';
import { Users } from 'src/users/entities/user.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  desc: string;

  order: number;

  created_by?: Users;

  grouptask: Grouptask;
}
