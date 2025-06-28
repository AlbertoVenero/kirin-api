import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtniaController } from './etnia.controller';

import { Etnia } from './entities/etnia.entity';
import { EtniaService } from './etnia.service';


@Module({
  imports: [TypeOrmModule.forFeature([
    Etnia,
  ])],
  controllers: [EtniaController],
  providers: [EtniaService],
  exports: [EtniaService],
})
export class EtniaModule {}