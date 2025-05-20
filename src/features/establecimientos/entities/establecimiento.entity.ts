
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Establecimiento {

    @PrimaryGeneratedColumn('uuid')
    estab_uuid: string; // Código numérico como string
    @Column({ unique: true })
    estab_id: string; // Código numérico como string
    @Column('text')
    estab_name: string;
    @Column('text')
    estab_direc: string;
    @Column('text')
    mpps_catast: string;
    @Column('text')
    estab_coord: string;
    @Column('text')
    estab_serv: string[]; // Array de servic_id (Prestservic)
}


