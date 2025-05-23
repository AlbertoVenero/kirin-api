
import { Column, Entity, Generated, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { EstablecimientoImage } from "./establecimiento-images.entity";

@Entity({name: 'establecimiento'})
export class Establecimiento {

    @Column({type: 'text', unique: true})
    @Generated("uuid")
    estab_uuid: string; // Código numérico como string
    @PrimaryColumn({ unique: true })
    estab_id: string; // Código numérico como string
    @Column('text')
    estab_name: string;
    @Column('text')
    estab_direc: string;
    @Column('text')
    mpps_catast: string;
    @Column('text')
    estab_coord: string;
    @Column({ type: 'text', nullable: true })
    tipo_estab: string; // Código del tipo de establecimiento
    @Column({ type: 'text', nullable: true })
    id_padre: string; // Código del establecimiento padre
    @Column({ type: 'text', nullable: true })
    telefono: string; // Número de teléfono del establecimiento
    @Column('text')
    estab_serv: string[]; // Array de servic_id (Prestservic)

    //imagenes del centro
    @OneToMany(
        () => EstablecimientoImage,
        (establecimientoImage) => establecimientoImage.establImages,
        { cascade: true, eager: true }
    )
    images?: EstablecimientoImage[];
}
