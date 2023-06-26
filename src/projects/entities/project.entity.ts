import { Workspace } from 'src/workspaces/entities/workspace.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.projets)
  workspace: Workspace;
}
