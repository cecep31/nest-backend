import { Users } from 'src/users/entities/user.entity';
import { Column, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

export class Post {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @OneToOne(() => Users)
  @JoinColumn()
  createBy: Users;
}
