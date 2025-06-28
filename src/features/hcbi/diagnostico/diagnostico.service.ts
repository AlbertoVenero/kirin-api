import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Diagnostico } from './entities/diagnostico.entity';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';

@Injectable()
export class DiagnosticoService {
    constructor(
        @InjectRepository(Diagnostico) private readonly diagnosticoRepo: Repository<Diagnostico>,
    ) {}

    createDiagnostico(dto: CreateDiagnosticoDto) { return this.diagnosticoRepo.save(dto); }
    findAllDiagnostico() { return this.diagnosticoRepo.find(); }
    findOneDiagnostico(id: number) { return this.diagnosticoRepo.findOneBy({ diag_id: id }); }
    updateDiagnostico(id: number, dto: UpdateDiagnosticoDto) { return this.diagnosticoRepo.update(id, dto); }
    removeDiagnostico(id: number) { return this.diagnosticoRepo.delete(id); }
}
