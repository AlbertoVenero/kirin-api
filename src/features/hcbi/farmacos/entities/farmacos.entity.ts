import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('farmacos')
export class Farmacos {
  @PrimaryGeneratedColumn()
  farm_id: number;

  @Column()
  farm_name: string;

  @Column()
  farm_period: string;

  @Column({ nullable: true })
  farm_observ: string;
}
