import { Column, PrimaryColumn } from 'typeorm';

export class Workspace {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;
}
