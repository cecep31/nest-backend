import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User_groups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
