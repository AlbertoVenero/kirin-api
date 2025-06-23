
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { TipoEstabl } from './create-tipo-establ.entity';


@Entity({ name: 'establasoc' })
export class TipoEstablAsoc {

    @PrimaryGeneratedColumn()
    id_soc: string;

    @Column()
    asoc_id: string;
    
    @ManyToOne(
        () => TipoEstabl,
        ( tipoEstabl ) => tipoEstabl.tipo_establ_cod,
        {  onDelete: 'CASCADE' }
    )
    tipo_asoc: TipoEstabl

}