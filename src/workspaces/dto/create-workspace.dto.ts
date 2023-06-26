import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Project } from 'src/projects/entities/project.entity';
import { Users } from 'src/users/entities/user.entity';

export class CreateWorkspaceDto {
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
