import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exstack1 } from './entities/exstack1.entity';
import { Exstack2 } from './entities/exstack2.entity';
import { ExamenesService } from './examenes.service';
import { ExamenesController } from './examenes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Exstack1, Exstack2])],
  controllers: [ExamenesController],
  providers: [ExamenesService],
  exports: [ExamenesService],
})
export class ExamenesModule {}
