import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('etnia')
export class Etnia {
    @PrimaryGeneratedColumn()
    etnia_id: number;

    @Column()
    etnia: string;

    @Column({ nullable: true })
    etnia_obser: string;
}
