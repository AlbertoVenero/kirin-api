import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './entities/estados.entity';
import { Municipio } from './entities/municipios.entity';
import { Ciudad } from './entities/ciudades.entity';
import { Parroquia } from './entities/parroquias.entity';

@Injectable()
export class UbicacionService {
    constructor(
        @InjectRepository(Estado)
        private estadoRepository: Repository<Estado>,
        @InjectRepository(Municipio)
        private municipioRepository: Repository<Municipio>,
        @InjectRepository(Ciudad)
        private ciudadRepository: Repository<Ciudad>,
        @InjectRepository(Parroquia)
        private parroquiaRepository: Repository<Parroquia>,
    ) { }

    async findAllEstados(): Promise<Estado[]> {
        return this.estadoRepository.find({ relations: ['municipios'] });
    }

    async findMunicipiosByEstado(estadoId: string): Promise<Municipio[]> {
        return this.municipioRepository.find({
            where: { estado: { id: estadoId } },
            relations: ['ciudades', 'parroquias'],
        });
    }

    async findCiudadesByMunicipio(municipioId: string): Promise<Ciudad[]> {
        return this.ciudadRepository.find({
            where: { municipio: { id: municipioId } },
        });
    }
    async findParroquiasByMunicipio(municipioId: string): Promise<Parroquia[]> {
        return this.parroquiaRepository.find({
            where: { municipio: { id: municipioId } },
        });
    }

    // Métodos similares para parroquias y otras consultas
}