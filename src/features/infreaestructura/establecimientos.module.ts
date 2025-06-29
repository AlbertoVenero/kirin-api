import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EstablecimientosController } from './establecimiento/establecimientos.controller';
import { EstablecimientosService } from './establecimiento/establecimientos.service';
import { EstablecimientoServicioController } from './servicios_establ/establecimiento-servicio.controller';
import { EstablecimientoServicioService } from './servicios_establ/establecimiento-servicio.service';
import { EstablecimientoServicio } from './servicios_establ/entities/establecimiento-servicio.entity';

import { Establecimiento } from './establecimiento/entities/establecimiento.entity';
import { EstablecimientoImage } from './establecimiento/entities/establecimiento-images.entity';
import { TipoEstabl } from './tipo_establ/entites/create-tipo-establ.entity';
import { TipoEstablAsoc } from './tipo_establ/entites/create-establ-asoc.entity';
import { TipoDependAsoc } from './dependencias/entities/create-depend-asoc.entity';
import { DependAdmin } from './dependencias/entities/create-dependencias.entity';


@Module({
  controllers: [EstablecimientosController, EstablecimientoServicioController],
  providers: [EstablecimientosService, EstablecimientoServicioService],
  imports: [
    TypeOrmModule.forFeature([
      Establecimiento, 
      EstablecimientoImage,
      TipoEstabl,
      TipoEstablAsoc,
      TipoDependAsoc,
      DependAdmin,
      EstablecimientoServicio
    ]),
  ],
  exports: [
    EstablecimientosService,
    EstablecimientoServicioService,
    TypeOrmModule,
  ]
})
export class EstablecimientosModule {}
