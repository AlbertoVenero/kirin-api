import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { HcbiModule } from './hcbi/hcbi.module';

@Module({
  imports: [ConfigModule, AuthModule, FuncionarioModule, HcbiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
