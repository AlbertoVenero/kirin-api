import { Entity,  Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Municipio } from './municipios.entity';
import { Ciudad } from './ciudades.entity';
import { Parroquia } from './parroquias.entity';

@Entity({ name: 'estados' })
export class Estado {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ type: 'varchar', length: 60, name: 'nombre' })
  nombre: string;

  @OneToMany(() => Municipio, (municipio) => municipio.estado)
  municipios: Municipio[];

  @OneToMany(() => Ciudad, (ciudad) => ciudad.estado)
  ciudades: Ciudad[];

  @OneToMany(() => Parroquia, (parroquia) => parroquia.estado)
  parroquias: Parroquia[];
}