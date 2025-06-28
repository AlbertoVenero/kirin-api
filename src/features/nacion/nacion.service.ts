import { Repository } from "typeorm";
import { Nacion } from "./entities/nacion.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { CreateNacionDto } from "./dto/create-nacion.dto";
import { UpdateNacionDto } from "./dto/update-nacion.dto";


@Injectable()
export class NacionService {
    constructor(
        @InjectRepository(Nacion) private readonly nacionRepo: Repository<Nacion>,
    ) { }
    // Métodos CRUD para Nacion
    createNacion(dto: CreateNacionDto) { return this.nacionRepo.save(dto); }
    findAllNacion() { return this.nacionRepo.find(); }
    findOneNacion(id: number) { return this.nacionRepo.findOneBy({ nac_id: id }); }
    updateNacion(id: number, dto: UpdateNacionDto) { return this.nacionRepo.update(id, dto); }
    removeNacion(id: number) { return this.nacionRepo.delete(id); }
}