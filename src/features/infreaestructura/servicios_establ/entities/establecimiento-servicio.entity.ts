import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class EstablecimientoServicio {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    idServ: string;

    @Column()
    name: string;

}
