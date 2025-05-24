
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { TipoEstabl } from './create-tipo-establ.entity';



@Entity({ name: 'establasoc' })
export class TipoEstablAsoc {

    @PrimaryColumn()
    id_soc: string;

    @ManyToOne(
        () => TipoEstabl,
        ( tipoEstabl ) => tipoEstabl.tipo_establ_cod,
        {  onDelete: 'CASCADE' }
    )
    tipoasoc: TipoEstabl

}