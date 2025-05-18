import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { FuncionarioModule } from './features/funcionario/funcionario.module';
import { HcbiModule } from './features/hcbi/hcbi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './config/app/database.providers';




@Module({
  imports: [
    TypeOrmModule.forRoot(databaseProviders),
    ConfigModule.forRoot(), 
    AuthModule, 
    FuncionarioModule, 
    HcbiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
