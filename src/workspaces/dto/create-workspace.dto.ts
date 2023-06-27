import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmpty,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Project } from 'src/projects/entities/project.entity';
import { Users } from 'src/users/entities/user.entity';

export class CreateWorkspaceDto {
  @IsEmpty()
  id?: string;

  @IsNotEmpty()
  title: string;

  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Users)
  members: Users[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Project)
  projects: Project[];
}
