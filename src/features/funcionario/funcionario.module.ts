import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { Funcionario } from './entities/funcionario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncAsign } from './entities/func_asign.entity';
import { FuncAcceso } from './entities/func_acceso.entity';
import { FuncTurnos } from './entities/func_turnos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario, FuncAsign, FuncAcceso, FuncTurnos ])],
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
  exports: [FuncionarioService],
})
export class FuncionarioModule {}
