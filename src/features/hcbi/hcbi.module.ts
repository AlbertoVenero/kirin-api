import { Module } from '@nestjs/common';
import { PacthcbiModule } from './pacthcbi/pacthcbi.module';
import { PactsoapModule } from './pactsoap/pactsoap.module';

@Module({
  imports: [PacthcbiModule, PactsoapModule]
})
export class HcbiModule {}
