import { Project } from 'src/projects/entities/project.entity';
import { Users } from 'src/users/entities/user.entity';
import {
  Column,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

export class Workspace {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Users)
  @JoinColumn()
  members: Users[];

  @OneToMany(() => Project, (project) => project.workspace)
  @JoinColumn()
  projets: Project[];
}
