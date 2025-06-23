
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

    @Column({ type: 'text', nullable: true} )
    utm_y: string;

    @Column({ type: 'text', nullable: true})
    utm_x: string;

    @Column({ type: 'text', nullable: true})
    altitud: string;

    @Column({ type: 'text', nullable: true })
    tipo_estab: string; // Código del tipo de establecimiento

    @Column({ type: 'text', nullable: true})
    nivel_estab: string;

    @Column({ nullable: true })
    repo_admin: boolean;
    
    @Column({ nullable: true })
    isActive: boolean;

    @Column({ nullable: true })
    cond_estab: boolean; // Condición del establecimiento
    
    @Column({ type: 'text', nullable: true })
    id_padre: string; // Código del establecimiento padre

    @Column({ type: 'text', nullable: true })
    telefono: string; // Número de teléfono del establecimiento
    
    @Column({ type: 'text', nullable: true })
    estab_serv: string[]; // Array de servic_id (Prestservic)

    @Column({ type: 'text', nullable: true })
    cod_ubigeo: string;
    
    //imagenes del centro
    @OneToMany(
        () => EstablecimientoImage,
        (establecimientoImage) => establecimientoImage.establImages,
        { cascade: true, eager: true }
    )
    images?: EstablecimientoImage[];
}
