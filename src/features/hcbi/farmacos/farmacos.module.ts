import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farmacos } from './entities/farmacos.entity';
import { FarmacosService } from './farmacos.service';
import { FarmacosController } from './farmacos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Farmacos])],
  controllers: [FarmacosController],
  providers: [FarmacosService],
  exports: [FarmacosService],
})
export class FarmacosModule {}
