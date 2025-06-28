import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './entities/estados.entity';
import { Municipio } from './entities/municipios.entity';
import { Ciudad } from './entities/ciudades.entity';
import { Parroquia } from './entities/parroquias.entity';
import { EstadoDto, SearchCiudadDto, SearchParroquiaDto,} from './dtos/index';
import { SearchMunicipioDto } from './dtos/municipio/municipio.dto';



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

    async findAllEstados(): Promise<EstadoDto[]> {
        const estados = await this.estadoRepository.find();
        return estados.map(e => ({
            id: e.id,
            nombre: e.nombre,
        }));
    }

    async findMunicipiosByEstado(estadoId: string): Promise<SearchMunicipioDto[]> {
        const municipios = await this.municipioRepository.find({
            where: { estado: { id: estadoId } },
        });
        return municipios.map(m => ({
            id: m.id,
            nombre: m.nombre,
        }));
    }

    async findParroquiasByMunicipio(municipioId: string): Promise<SearchParroquiaDto[]> {
        const parroquias = await this.parroquiaRepository.find({
            where: { municipio: { id: municipioId } },
        });
        return parroquias.map(p => ({
            id: p.id,
            nombre: p.nombre,
        }));
    }

    async findCiudadesByMunicipio(municipioId: string): Promise<SearchCiudadDto[]> {
        const ciudades = await this.ciudadRepository.find({
            where: { municipio: { id: municipioId } },
        });
        return ciudades.map(c => ({
            id: c.id,
            nombre: c.nombre,
        }));
    }

    async findCiudadesByParroquia(parroquiaId: string): Promise<SearchCiudadDto[]> {
        const ciudades = await this.ciudadRepository.find({
            where: { parroquia: { id: parroquiaId } },
        });
        return ciudades.map(c => ({
            id: c.id,
            nombre: c.nombre,
        }));
    }
    // Métodos similares para parroquias y otras consultas
}