import { Entity, Column, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Estado } from './estados.entity';
import { Ciudad } from './ciudades.entity';
import { Parroquia } from './parroquias.entity';

@Entity({ name: 'municipios' })
export class Municipio {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ type: 'varchar', length: 60, name: 'nombre' })
  nombre: string;

  @ManyToOne(() => Estado, (estado) => estado.municipios)
  estado: Estado;

  @OneToMany(() => Ciudad, (ciudad) => ciudad.municipio)
  ciudades: Ciudad[];

  @OneToMany(() => Parroquia, (parroquia) => parroquia.municipio)
  parroquias: Parroquia[];
}