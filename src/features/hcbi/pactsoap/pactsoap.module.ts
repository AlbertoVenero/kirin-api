import { Module } from '@nestjs/common';
import { PactsoapService } from './pactsoap.service';
import { PactsoapController } from './pactsoap.controller';

@Module({
  controllers: [PactsoapController],
  providers: [PactsoapService],
})
export class PactsoapModule {}
