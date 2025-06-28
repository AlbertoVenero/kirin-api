import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PactHcbi2Controller } from './pacthcbi2.controller';
import { PactHcbi2Service } from './pacthcbi2.service';
import { PactHcbi2 } from './entities/pacthcbi2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PactHcbi2])],
  controllers: [PactHcbi2Controller],
  providers: [PactHcbi2Service],
  exports: [PactHcbi2Service],
})
export class PactHcbi2Module {}
