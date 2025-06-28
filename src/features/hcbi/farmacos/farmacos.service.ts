import { Injectable } from '@nestjs/common';
import { CreateFarmacosDto } from './dto/create-farmacos.dto';
import { UpdateFarmacosDto } from './dto/update-farmacos.dto';
import { Farmacos } from './entities/farmacos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FarmacosService {
    constructor(
        @InjectRepository(Farmacos) private readonly farmacosRepo: Repository<Farmacos>,
    ) { }
    // Métodos CRUD para Farmacos
    createFarmacos(dto: CreateFarmacosDto) { return this.farmacosRepo.save(dto); }
    findAllFarmacos() { return this.farmacosRepo.find(); }
    findOneFarmacos(id: number) { return this.farmacosRepo.findOneBy({ farm_id: id }); }
    updateFarmacos(id: number, dto: UpdateFarmacosDto) { return this.farmacosRepo.update(id, dto); }
    removeFarmacos(id: number) { return this.farmacosRepo.delete(id); }
}
