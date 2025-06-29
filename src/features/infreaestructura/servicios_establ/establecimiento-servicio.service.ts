import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstablecimientoServicio } from './entities/establecimiento-servicio.entity';
import { CreateEstablecimientoServicioDto } from './dto/create-establecimiento-servicio.dto';
import { UpdateEstablecimientoServicioDto } from './dto/update-establecimiento-servicio.dto';


@Injectable()
export class EstablecimientoServicioService {
    constructor(
        @InjectRepository(EstablecimientoServicio)
        private readonly repo: Repository<EstablecimientoServicio>,
    ) { }

    create(dto: CreateEstablecimientoServicioDto) {
        const entity = this.repo.create(dto);
        return this.repo.save(entity);
    }

    findAll() {
        return this.repo.find();
    }

    findOne(id: string) {
        return this.repo.findOneBy({ id });
    }

    update(id: string, dto: UpdateEstablecimientoServicioDto) {
        return this.repo.update(id, dto);
    }

    remove(id: string) {
        return this.repo.delete(id);
    }
}
