import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FuncionarioModule } from './features/funcionario/funcionario.module';
import { HcbiModule } from './features/hcbi/hcbi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


import { EstablecimientosModule } from './features/infreaestructura/establecimientos.module';
import { UbicacionModule } from './features/ubicacion/ubicacion.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
      database: process.env.DB_NAME,
      username: 'postgres',
      password: 'MySiri@MyKirin',      
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(), 
    AuthModule, 
    FuncionarioModule, 
    HcbiModule,
    EstablecimientosModule,
    UbicacionModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
