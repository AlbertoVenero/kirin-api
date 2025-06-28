import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('func-audit')
export class FuncAudit {
  @PrimaryGeneratedColumn('uuid')
  func_id: string;

  @Column()
  estab_id: number;

  @Column()
  func_audit: boolean;

  @Column('uuid')
  conet_id: string;
}
