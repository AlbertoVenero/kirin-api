import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('soap2')
export class Soap2 {
  @PrimaryGeneratedColumn()
  soap_id: number;

  @Column()
  medicine_id: number;

  @Column()
  medicine_indic: string;
}
