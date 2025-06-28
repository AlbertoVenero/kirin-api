import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('pact-hcbi3')
export class PactHcbi3 {
  @PrimaryColumn()
  pact_nh: string;

  @Column()
  ced_madre: string;

  @Column()
  ced_padre: string;

  @Column()
  num_cel: string;

  @Column()
  num_contact: string;

  @Column()
  email: string;
}
