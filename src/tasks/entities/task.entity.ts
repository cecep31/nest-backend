import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from '../../users/entities/user.entity';
import { Grouptask } from 'src/grouptasks/entities/grouptask.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Users)
  @JoinColumn()
  created_by: Users;

  @ManyToOne(() => Grouptask,(grouptask) => grouptask.tasks)
  grouptask: Grouptask

  @DeleteDateColumn()
  Deleted_at: Date;
  
}
