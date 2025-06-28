import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PactHcbi3Controller } from './pacthcbi3.controller';
import { PactHcbi3Service } from './pacthcbi3.service';
import { PactHcbi3 } from './entities/pacthcbi3.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PactHcbi3])],
  controllers: [PactHcbi3Controller],
  providers: [PactHcbi3Service],
  exports: [PactHcbi3Service],
})
export class PactHcbi3Module {}
