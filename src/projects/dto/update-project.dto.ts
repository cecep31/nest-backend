import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { Workspace } from 'src/workspaces/entities/workspace.entity';

export class UpdateProjectDto {
  id?: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmptyObject()
  workspace: Workspace;
}
