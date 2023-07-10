import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmpty,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Project } from 'src/projects/entities/project.entity';
import { Users } from 'src/users/entities/user.entity';
import { CreateDateColumn } from 'typeorm';

export class CreateWorkspaceDto {
  @IsEmpty()
  id?: string;

  @IsNotEmpty()
  title: string;

 
  @IsEmpty({ each: true })
  @ValidateNested({ each: true })
  @Type(() => Users)
  members: Users[];

  @IsEmpty({ each: true })
  @ValidateNested({ each: true })
  @Type(() => Project)
  projects: Project[];

  @CreateDateColumn()
  createdAt: Date
}
