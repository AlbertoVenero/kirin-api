import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('diagnostico')
export class Diagnostico {
  @PrimaryGeneratedColumn()
  diag_id: number;

  @Column()
  descripcion: string;
}
