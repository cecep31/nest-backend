import { ArrayNotEmpty, IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Project } from 'src/projects/entities/project.entity';
import { Users } from 'src/users/entities/user.entity';

export class UpdateWorkspaceDto {
  @IsNotEmpty()
  id: string;
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
  projects: string[];
}
