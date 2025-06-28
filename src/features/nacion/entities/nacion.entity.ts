import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('nacion')
export class Nacion {
  @PrimaryGeneratedColumn()
  nac_id: number;

  @Column()
  nac: string;

  @Column({ nullable: true })
  nac_desc: string;
}
