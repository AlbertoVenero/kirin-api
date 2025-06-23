import { Entity, Column, ManyToOne, PrimaryColumn, OneToMany } from 'typeorm';
import { Estado } from './estados.entity';
import { Municipio } from './municipios.entity';
import { Ciudad } from './ciudades.entity';

@Entity({ name: 'parroquias' })
export class Parroquia {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ type: 'varchar', length: 60, nullable: true, name: 'nombre' })
  nombre: string;

  @ManyToOne(() => Estado, (estado) => estado.parroquias)
  estado: Estado;

  @ManyToOne(() => Municipio, (municipio) => municipio.parroquias)
  municipio: Municipio;

  @OneToMany(() => Ciudad, (ciudad) => ciudad.parroquia)
  ciudades: Ciudad[];
}