import { Injectable } from '@nestjs/common';
import { CreateEstablecimientoDto } from './dto/create-establecimiento.dto';
import { UpdateEstablecimientoDto } from './dto/update-establecimiento.dto';
import { Repository } from 'typeorm';
import { Establecimiento } from './entities/establecimiento.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstablecimientosService {
  constructor(
    @InjectRepository(Establecimiento)
    private readonly establecimientoRepository: Repository<Establecimiento>,
  ) {}



  async create(createEstablecimientoDto: CreateEstablecimientoDto) {
    const establecimiento = this.establecimientoRepository.create(createEstablecimientoDto);
    await this.establecimientoRepository.save(establecimiento);
    return establecimiento;
  }

  findAll() {
    const establecimiento = this.establecimientoRepository.find();
    return establecimiento;
  }

  async findOne(id: string) {
    const establecimiento = await this.establecimientoRepository.findOneBy({ estab_id: id });
    return establecimiento;
  }

  async update(id: string, updateEstablecimientoDto: UpdateEstablecimientoDto) {
    const establecimiento = await this.establecimientoRepository.preload({ estab_id: id });
    if (!establecimiento) {
      throw new Error(`Establecimiento with id ${id} not found`);
    }
    await this.establecimientoRepository.save(establecimiento);
    return establecimiento;
  }

  async remove(id: string) {
    const establecimiento = await this.findOne(id);
    if (!establecimiento) {
      throw new Error(`Establecimiento with id ${id} not found`);
    }
    await this.establecimientoRepository.remove(establecimiento);
  }
}
