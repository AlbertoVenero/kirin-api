import { Module } from '@nestjs/common';
import { PacthcbiService } from './pacthcbi.service';
import { PacthcbiController } from './pacthcbi.controller';

@Module({
  controllers: [PacthcbiController],
  providers: [PacthcbiService],
})
export class PacthcbiModule {}
