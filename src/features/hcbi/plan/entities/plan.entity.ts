import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('plan')
export class Plan {
  @PrimaryGeneratedColumn()
  plan_id: number;

  @Column()
  plan_observ: string;

  @Column()
  descripcion: string;
}
