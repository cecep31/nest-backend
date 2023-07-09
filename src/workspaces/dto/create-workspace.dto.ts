import { Type } from 'class-transformer';
import {
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

  // @ArrayNotEmpty()
  @IsArray()
  @IsEmpty({ each: true })
  @ValidateNested({ each: true })
  @Type(() => Users)
  members: Users[];

  @IsArray()
  @IsEmpty({ each: true })
  @ValidateNested({ each: true })
  @Type(() => Project)
  projects: Project[];
}
