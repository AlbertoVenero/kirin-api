import { Injectable } from '@nestjs/common';
import { Exstack1 } from './entities/exstack1.entity';
import { Exstack2 } from './entities/exstack2.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExstack1Dto } from './dto/create-exstack1.dto';
import { UpdateExstack1Dto } from './dto/update-exstack1.dto';
import { CreateExstack2Dto } from './dto/create-exstack2.dto';
import { UpdateExstack2Dto } from './dto/update-exstack2.dto';

@Injectable()
export class ExamenesService {
    constructor(
        @InjectRepository(Exstack1) private readonly exstack1Repo: Repository<Exstack1>,
        @InjectRepository(Exstack2) private readonly exstack2Repo: Repository<Exstack2>,
    ) {}

    // Métodos CRUD para Exstack1
    createExstack1(dto: CreateExstack1Dto) { return this.exstack1Repo.save(dto); }
    findAllExstack1() { return this.exstack1Repo.find(); }
    findOneExstack1(id: number) { return this.exstack1Repo.findOneBy({ extipo_id: id }); }
    updateExstack1(id: number, dto: UpdateExstack1Dto) { return this.exstack1Repo.update(id, dto); }
    removeExstack1(id: number) { return this.exstack1Repo.delete(id); }

    // Métodos CRUD para Exstack2
    createExstack2(dto: CreateExstack2Dto) { return this.exstack2Repo.save(dto); }
    findAllExstack2() { return this.exstack2Repo.find(); }
    findOneExstack2(id: number) { return this.exstack2Repo.findOneBy({ ex_id: id }); }
    updateExstack2(id: number, dto: UpdateExstack2Dto) { return this.exstack2Repo.update(id, dto); }
    removeExstack2(id: number) { return this.exstack2Repo.delete(id); }


}
