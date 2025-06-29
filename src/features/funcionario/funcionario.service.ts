import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { FuncAsign } from './entities/func_asign.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario) private readonly funcionarioRepo: Repository<Funcionario>,
    @InjectRepository(FuncAsign) private readonly funcAsignRepo: Repository<FuncAsign>,
  ) { }

  async findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepo.find();
  }

  async findOne(funcced: string): Promise<Funcionario> {
    const user = await this.funcionarioRepo.findOne({
      where: { funcced },
    });
    if (!user) {
      throw new NotFoundException(
        `Funcionario with ID "${funcced}" not found`,
      );
    }
    return user;
  }

  async create(createFuncUsuarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    const newFuncUsuario =
      this.funcionarioRepo.create(createFuncUsuarioDto);
    return this.funcionarioRepo.save(newFuncUsuario);
  }

  async update(
    funcced: string,
    updateFuncUsuarioDto: UpdateFuncionarioDto,
  ): Promise<Funcionario> {
    const user = await this.findOne(funcced); // Reuses findOne to check existence
    Object.assign(user, updateFuncUsuarioDto);
    return this.funcionarioRepo.save(user);
  }

  async remove(funcced: string): Promise<void> {
    const result = await this.funcionarioRepo.delete(funcced);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Funcionario with ID "${funcced}" not found`,
      );
    }
  }

  // Métodos para FuncAsign
  async findAllAsignaciones(): Promise<FuncAsign[]> {
    return this.funcAsignRepo.find({ relations: ['funcionario'] });
  }

  async findAsignacionById(asig_id: string): Promise<FuncAsign> {
    const asig = await this.funcAsignRepo.findOne({ where: { asig_id }, relations: ['funcionario'] });
    if (!asig) {
      throw new NotFoundException(`Asignación con ID "${asig_id}" no encontrada`);
    }
    return asig;
  }

  async createAsignacion(data: Partial<FuncAsign>): Promise<FuncAsign> {
    const nueva = this.funcAsignRepo.create(data);
    return this.funcAsignRepo.save(nueva);
  }

  async updateAsignacion(asig_id: string, data: Partial<FuncAsign>): Promise<FuncAsign> {
    const asig = await this.findAsignacionById(asig_id);
    Object.assign(asig, data);
    return this.funcAsignRepo.save(asig);
  }

  async removeAsignacion(asig_id: string): Promise<void> {
    const result = await this.funcAsignRepo.delete(asig_id);
    if (result.affected === 0) {
      throw new NotFoundException(`Asignación con ID "${asig_id}" no encontrada`);
    }
  }

}
