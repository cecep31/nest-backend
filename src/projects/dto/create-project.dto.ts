import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { Workspace } from 'src/workspaces/entities/workspace.entity';

export class CreateProjectDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmptyObject()
  workspace: Workspace;
}
