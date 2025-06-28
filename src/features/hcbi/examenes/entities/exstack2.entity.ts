import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exstack2')
export class Exstack2 {
  @PrimaryGeneratedColumn()
  ex_id: number;

  @Column()
  name: string;

  @Column()
  extipo_id: number;
}
