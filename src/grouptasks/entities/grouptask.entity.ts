import { Project } from 'src/projects/entities/project.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Grouptask {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  order: string;

  @OneToMany(() => Task, (task) => task.grouptask, { eager: true })
  tasks: Task[];

  @ManyToOne(() => Project, (project) => project.grouptask)
  project: Project;

  @DeleteDateColumn()
  Deleted_at: Date;
}
