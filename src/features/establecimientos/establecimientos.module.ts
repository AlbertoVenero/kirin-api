import { Module } from '@nestjs/common';
import { EstablecimientosService } from './establecimientos.service';
import { EstablecimientosController } from './establecimientos.controller';
import { Establecimiento } from './entities/establecimiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablecimientoImage } from './entities/establecimiento-images.entity';

@Module({
  controllers: [EstablecimientosController],
  providers: [EstablecimientosService],
  imports: [
    TypeOrmModule.forFeature([Establecimiento, EstablecimientoImage]),
  ],
  exports: [
    EstablecimientosService,
    TypeOrmModule,
  ]
})
export class EstablecimientosModule {}
