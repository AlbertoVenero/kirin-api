import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Funcionario } from './entities/funcionario.entity';
import { CreateFuncAsignDto } from './dto/create-func_asign.dto';
import { UpdateFuncAsignDto } from './dto/update-func_asign.dto';
import { FuncAsign } from './entities/func_asign.entity';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createFuncUsuarioDto: CreateFuncionarioDto,
  ): Promise<Funcionario> {
    return this.funcionarioService.create(createFuncUsuarioDto);
  }

  @Get()
  async findAll(): Promise<Funcionario[]> {
    return this.funcionarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Funcionario> {
    return this.funcionarioService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFuncUsuarioDto: UpdateFuncionarioDto,
  ): Promise<Funcionario> {
    return this.funcionarioService.update(id, updateFuncUsuarioDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    return this.funcionarioService.remove(id);
  }

  // FuncAsign endpoints
  @Get('asignaciones')
  async findAllAsignaciones(): Promise<FuncAsign[]> {
    return this.funcionarioService.findAllAsignaciones();
  }

  @Get('asignaciones/:id')
  async findAsignacionById(@Param('id') id: string): Promise<FuncAsign> {
    return this.funcionarioService.findAsignacionById(id);
  }

  @Post('asignaciones')
  @HttpCode(HttpStatus.CREATED)
  async createAsignacion(@Body() dto: CreateFuncAsignDto): Promise<FuncAsign> {
    return this.funcionarioService.createAsignacion(dto);
  }

  @Put('asignaciones/:id')
  async updateAsignacion(
    @Param('id') id: string,
    @Body() dto: UpdateFuncAsignDto,
  ): Promise<FuncAsign> {
    return this.funcionarioService.updateAsignacion(id, dto);
  }

  @Delete('asignaciones/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeAsignacion(@Param('id') id: string): Promise<void> {
    return this.funcionarioService.removeAsignacion(id);
  }
}
