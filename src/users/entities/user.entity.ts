import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { Post } from 'src/posts/entities/post.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  image: string;

  @Column({ default: false })
  issuperadmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Post, (post) => post.createBy)
  posts: Post[]

  @Expose()
  fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
