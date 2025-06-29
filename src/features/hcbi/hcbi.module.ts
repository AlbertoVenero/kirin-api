import { Module } from '@nestjs/common';
import { PacthcbiModule } from './pacthcbi/pacthcbi.module';
import { PactHcbi2Module } from './pacthcbi2/pacthcbi2.module';
import { PactHcbi3Module } from './pacthcbi3/pacthcbi3.module';
import { DiagnosticoModule } from './diagnostico/diagnostico.module';
import { ExamenesModule } from './examenes/examenes.module';
import { FarmacosModule } from './farmacos/farmacos.module';
import { PlanModule } from './plan/plan.module';
import { SoapModule } from './soap/soap.module';

@Module({
  imports: [
    DiagnosticoModule,
    ExamenesModule,
    FarmacosModule,
    PacthcbiModule,
    PactHcbi2Module,
    PactHcbi3Module,
    SoapModule,
    PlanModule,
  ]
})
export class HcbiModule { }
