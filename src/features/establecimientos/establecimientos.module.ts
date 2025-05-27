import { Module } from '@nestjs/common';
import { EstablecimientosService } from './services/establecimientos.service';
import { EstablecimientosController } from './controllers/establecimientos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DependAdmin, Establecimiento, EstablecimientoImage, TipoDependAsoc, TipoEstabl, TipoEstablAsoc } from './entities/barril-entities';


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
