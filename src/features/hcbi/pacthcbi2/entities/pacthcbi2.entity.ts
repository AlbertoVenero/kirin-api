import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('pact-hcbi2')
export class PactHcbi2 {
  @PrimaryColumn()
  pact_nh: string;

  @Column()
  situ_cony: string;

  @Column()
  nivel_e: string;

  @Column()
  profesion: string;

  @Column()
  ocupacion: string;
}
