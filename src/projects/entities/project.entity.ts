import { Grouptask } from 'src/grouptasks/entities/grouptask.entity';
import { Workspace } from 'src/workspaces/entities/workspace.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => Workspace, (workspace) => workspace.projets)
  workspace: Workspace;

  @OneToMany(() => Grouptask, (grouptasks) => grouptasks.project, {
    eager: true,
  })
  grouptask: Grouptask[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
