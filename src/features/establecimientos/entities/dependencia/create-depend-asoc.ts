
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { DependAdmin } from './create-dependencias.entity';


@Entity({ name: 'dependasoc' })
export class TipoDependAsoc {

    @PrimaryColumn()
    id_soc: string;

    @ManyToOne(
        () => DependAdmin,
        ( dependAdmin ) => dependAdmin.depend_asoc,
        {  onDelete: 'CASCADE' }
    )
    tipoasoc: DependAdmin

}