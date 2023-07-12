import { Users } from 'src/users/entities/user.entity';
import { Grouptask } from 'src/grouptasks/entities/grouptask.entity';
import { IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  id?: string;

  @IsNotEmpty()
  title: string;

  desc: string;

  order: number;

  created_by?: Users;

  grouptask: Grouptask;
}
