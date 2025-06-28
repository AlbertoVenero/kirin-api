import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Estado } from './estados.entity';
import { Municipio } from './municipios.entity';
import { Parroquia } from './parroquias.entity';

@Entity({ name: 'ciudades' })
export class Ciudad {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @ManyToOne(() => Estado, (estado) => estado.ciudades)
  estado: Estado;

  @ManyToOne(() => Municipio, (municipio) => municipio.ciudades)
  municipio: Municipio;

  @ManyToOne(() => Parroquia, (parroquia) => parroquia.ciudades)
  parroquia: Parroquia;

  @Column({ type: 'varchar', name: 'nombre' })
  nombre: string;
}