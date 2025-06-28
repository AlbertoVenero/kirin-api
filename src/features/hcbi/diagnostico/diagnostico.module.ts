import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diagnostico } from './entities/diagnostico.entity';
import { DiagnosticoService } from './diagnostico.service';
import { DiagnosticoController } from './diagnostico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Diagnostico])],
  controllers: [DiagnosticoController],
  providers: [DiagnosticoService],
  exports: [DiagnosticoService],
})
export class DiagnosticoModule {}
