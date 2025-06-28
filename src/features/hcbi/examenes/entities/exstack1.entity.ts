import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exstack1')
export class Exstack1 {
  @PrimaryGeneratedColumn()
  extipo_id: number;

  @Column()
  name: string;
}
