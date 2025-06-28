import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NacionService } from './nacion.service';
import { NacionController } from './nacion.controller';
import { Nacion } from './entities/nacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Nacion
  ])],
  controllers: [NacionController],
  providers: [NacionService],
  exports: [NacionService],
})
export class NacionModule {}
