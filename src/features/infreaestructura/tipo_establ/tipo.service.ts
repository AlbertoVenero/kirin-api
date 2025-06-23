import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoEstabl } from './entites/create-tipo-establ.entity';
import { TipoEstablAsoc } from './entites/create-establ-asoc.entity';
import { CreateTipoEstablDto } from './dto/create-tipo-establ.dto';
import { UpdateTipoEstablDto } from './dto/update-tipo-establ.dto';

@Injectable()
export class TipoService {
constructor(
    @InjectRepository(TipoEstabl)
    private readonly tipoEstablRepository: Repository<TipoEstabl>,
    @InjectRepository(TipoEstablAsoc)
    private readonly tipoEstablAsocRepository: Repository<TipoEstablAsoc>,
  ) {}

  async create(createTipoEstablDto: CreateTipoEstablDto) {
    try {
      const {tipo_establ_cod = [], ...tipoEstablDetails}  = createTipoEstablDto;
      const tipoEstabl = this.tipoEstablRepository.create({
        ...tipoEstablDetails, 
        tipo_establ_cod: tipo_establ_cod.map(tipo_establ_cod => this.tipoEstablAsocRepository.create({ asoc_id: tipo_establ_cod  })),
      });
      await this.tipoEstablRepository.save(tipoEstabl);
      return {...tipoEstabl, tipo_establ_cod};


    } catch (error) {
      throw new BadRequestException('Error al crear la dependencia: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.tipoEstablRepository.find();
    } catch (error) {
      throw new BadRequestException('Error al obtener los tipos de establecimientos: ' + error.message);
    }
  }

  async findOne(id: string) {
    const tipoEstabl = await this.tipoEstablRepository.findOneBy({ tipo_establ_id: id });
    if (!tipoEstabl) {
      throw new NotFoundException(`Tipo Establecimiento con id ${id} no encontrada`);
    }
    return tipoEstabl;
  }

  async update(id: string, updateTipoEstablDto: UpdateTipoEstablDto) {
    
    const {tipo_establ_cod, ...tipoEstablDetails}  = updateTipoEstablDto;

    const tipoEstabl = await this.tipoEstablRepository.preload({
      ...tipoEstablDetails, 
      tipo_establ_cod: tipo_establ_cod.map(tipo_establ_cod => this.tipoEstablAsocRepository.create({ asoc_id: tipo_establ_cod  })),
    });

    if (!tipoEstabl) throw new NotFoundException(`Tipo Establecimiento con id ${id} no encontrada`);
    
    try {
      await this.tipoEstablRepository.save(tipoEstabl);
      return tipoEstabl;
  
    } catch (error) {
      throw new BadRequestException('Error al crear la dependencia: ' + error.message);
    }
  }

  async remove(id: string) {
    const tipoEstabl = await this.tipoEstablRepository.findOne({ where: { tipo_establ_id: id } });
    if (!tipoEstabl) {
      throw new NotFoundException(`Dependencia con id ${id} no encontrada`);
    }
    try {
      await this.tipoEstablRepository.remove(tipoEstabl);
      return { message: 'Dependencia eliminada correctamente' };
    } catch (error) {
      throw new BadRequestException('Error al eliminar la dependencia: ' + error.message);
    }
  }
}
