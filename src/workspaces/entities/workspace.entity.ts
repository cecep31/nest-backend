import { Project } from 'src/projects/entities/project.entity';
import { Users } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Users)
  @JoinTable()
  members: Users[];

  @OneToMany(() => Project, (project) => project.workspace)
  @JoinColumn()
  projets: Project[];
}
