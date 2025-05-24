import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { TipoDependAsoc } from './create-depend-asoc';

@Entity({name: 'dependadmin'})
export class DependAdmin { 

    @PrimaryColumn({ unique: true })
    depend_id: string;
    
    @Column({ unique: true })
    depend_name: string;
    
    @Column()
    nivel_jerarquico: string;
    
    @Column()
    descripcion: string;

    @OneToMany(() => TipoDependAsoc, (tipoDependAsoc) => tipoDependAsoc.tipoasoc, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        orphanedRowAction: 'delete',
    })
    depend_asoc: TipoDependAsoc[];

}