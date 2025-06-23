import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { EstablecimientosController } from './establecimiento/establecimientos.controller';
import { EstablecimientosService } from './establecimiento/establecimientos.service';
import { Establecimiento } from './establecimiento/entities/establecimiento.entity';
import { EstablecimientoImage } from './establecimiento/entities/establecimiento-images.entity';
import { TipoEstabl } from './tipo_establ/entites/create-tipo-establ.entity';
import { TipoEstablAsoc } from './tipo_establ/entites/create-establ-asoc.entity';
import { TipoDependAsoc } from './dependencias/entities/create-depend-asoc.entity';
import { DependAdmin } from './dependencias/entities/create-dependencias.entity';


@Module({
  controllers: [EstablecimientosController],
  providers: [EstablecimientosService],
  imports: [
    TypeOrmModule.forFeature([
      Establecimiento, 
      EstablecimientoImage,
      TipoEstabl,
      TipoEstablAsoc,
      TipoDependAsoc,
      DependAdmin
    ]),
  ],
  exports: [
    EstablecimientosService,
    TypeOrmModule,
  ]
})
export class EstablecimientosModule {}
