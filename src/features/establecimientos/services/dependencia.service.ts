import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DependAdmin } from '../entities/dependencia/create-dependencias.entity';
import { CreateDependenciaDto } from '../dto/dependencia/create-dependencias.dto';
import { UpdateDependenciaDto } from '../dto/dependencia/update-dependencias.dto';

@Injectable()
export class DependenciaService {
  constructor(
    @InjectRepository(DependAdmin)
    private readonly dependenciaRepository: Repository<DependAdmin>,
  ) {}

  async create(createDependenciaDto: CreateDependenciaDto) {
    try {
      const dependencia = this.dependenciaRepository.create(createDependenciaDto);
      await this.dependenciaRepository.save(dependencia);
      return dependencia;
    } catch (error) {
      throw new BadRequestException('Error al crear la dependencia: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.dependenciaRepository.find();
    } catch (error) {
      throw new BadRequestException('Error al obtener las dependencias: ' + error.message);
    }
  }

  async findOne(id: string) {
    const dependencia = await this.dependenciaRepository.findOne({ where: { depend_id: id } });
    if (!dependencia) {
      throw new NotFoundException(`Dependencia con id ${id} no encontrada`);
    }
    return dependencia;
  }

  async update(id: string, updateDependenciaDto: UpdateDependenciaDto) {
    const toUpdate = updateDependenciaDto;
    const updateDep = await this.dependenciaRepository.preload({
      depend_id: id,
      ...toUpdate,
    });
    if (!updateDep) {
      throw new NotFoundException(`Dependencia con id ${id} no encontrada`);
    }
    try {
      await this.dependenciaRepository.save(updateDep);
      return updateDep;
    } catch (error) {
      throw new BadRequestException('Error al actualizar la dependencia: ' + error.message);
    }
  }

  async remove(id: string) {
    const dependencia = await this.dependenciaRepository.findOne({ where: { depend_id: id } });
    if (!dependencia) {
      throw new NotFoundException(`Dependencia con id ${id} no encontrada`);
    }
    try {
      await this.dependenciaRepository.remove(dependencia);
      return { message: 'Dependencia eliminada correctamente' };
    } catch (error) {
      throw new BadRequestException('Error al eliminar la dependencia: ' + error.message);
    }
  }
}
