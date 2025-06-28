import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoapController } from './soap.controller';
import { SoapService } from './soap.service';
import { Soap } from './entities/soap.entity';
import { Soap2 } from './entities/soap2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Soap, Soap2])],
  controllers: [SoapController],
  providers: [SoapService],
  exports: [SoapService],
})
export class SoapModule {}
