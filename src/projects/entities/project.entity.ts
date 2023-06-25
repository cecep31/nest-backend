import { Workspace } from 'src/workspaces/entities/workspace.entity';
import { Column, ManyToOne, PrimaryColumn } from 'typeorm';

export class Project {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.projets)
  workspace: Workspace;
}
