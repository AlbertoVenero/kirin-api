
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Establecimiento } from './establecimiento.entity';


@Entity({ name: 'establecimiento_images' })
export class EstablecimientoImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;

    @ManyToOne(
        () => Establecimiento,
        ( establecimiento ) => establecimiento.images,
        {  onDelete: 'CASCADE' }
    )
    establImages: Establecimiento

}