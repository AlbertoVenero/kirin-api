import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TipoEstablAsoc } from './create-establ-asoc.entity';

@Entity({name: 'tipoestabl'})
export class TipoEstabl { 

    @PrimaryColumn({ unique: true })
    tipo_establ_id: string;
    
    @Column({ unique: true })
    tipo_establ_name: string;
    
    @Column()
    nivel_jerarquico: string;
    
    @Column()
    descripcion: string;

    @OneToMany(
        () => TipoEstablAsoc, 
        (tipoEstablAsoc) => tipoEstablAsoc.tipo_asoc, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    tipo_establ_cod?: TipoEstablAsoc[]; // Array de servic_id (Prestservic)

}