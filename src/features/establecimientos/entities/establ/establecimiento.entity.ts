
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

    @Column('text')
    utm_y: string;

    @Column('text')
    utm_x: string;

    @Column('text')
    altitud: string;

    @Column({ type: 'text', nullable: true })
    tipo_estab: string; // Código del tipo de establecimiento

    @Column('text')
    nivel_estab: string;

    @Column()
    repo_admin: boolean;
    
    @Column()
    isActive: boolean;

    @Column()
    cond_estab: boolean; // Condición del establecimiento
    
    @Column({ type: 'text', nullable: true })
    id_padre: string; // Código del establecimiento padre

    @Column({ type: 'text', nullable: true })
    telefono: string; // Número de teléfono del establecimiento
    
    @Column('text')
    estab_serv: string[]; // Array de servic_id (Prestservic)

    @Column('text')
    cod_ubigeo: string;
    
    //imagenes del centro
    @OneToMany(
        () => EstablecimientoImage,
        (establecimientoImage) => establecimientoImage.establImages,
        { cascade: true, eager: true }
    )
    images?: EstablecimientoImage[];
}
