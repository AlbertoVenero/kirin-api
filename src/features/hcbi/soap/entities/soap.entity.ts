import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('soap')
export class Soap {
  @PrimaryGeneratedColumn()
  soap_id: number;

  @Column()
  pact_nh: string;

  @Column()
  fech_ex: Date;

  @Column()
  func_id: string;

  @Column()
  subjetivo: string;

  @Column()
  hallazgos: string;

  @Column()
  diag_id: number;

  @Column()
  plan_id: number;

  @Column()
  farm_id: number;

  @Column()
  consult_tipo: string;

  @Column({ nullable: true })
  referid: string;
}
