import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('conect-range')
export class ConectRange {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estab_id: number;

  @Column()
  estab_ip: string;

  @Column()
  estab_ssid: string;

  @Column('uuid')
  conet_id: string;
}
