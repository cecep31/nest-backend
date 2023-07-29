import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class Comment_post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @Column({ nullable: true })
  parentCommentId: string;

  @ManyToOne(() => Comment_post, (comment) => comment.replies)
  parentComment: Comment_post;

  @OneToMany(() => Comment_post, (comment) => comment.parentComment)
  replies: Comment_post[];

  @CreateDateColumn()
  created_at: Date;
}
