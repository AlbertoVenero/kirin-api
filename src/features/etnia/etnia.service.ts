import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEtniaDto } from "./dto/create-etnia.dto";
import { UpdateEtniaDto } from "./dto/update-etnia.dto";
import { Etnia } from "./entities/etnia.entity";
import { Repository } from "typeorm";

@Injectable()
export class EtniaService {
    constructor(
        @InjectRepository(Etnia) private readonly etniaRepo: Repository<Etnia>,
    ) { }

    // Métodos CRUD para Etnia
    createEtnia(dto: CreateEtniaDto) { return this.etniaRepo.save(dto); }
    findAllEtnia() { return this.etniaRepo.find(); }
    findOneEtnia(id: number) { return this.etniaRepo.findOneBy({ etnia_id: id }); }
    updateEtnia(id: number, dto: UpdateEtniaDto) { return this.etniaRepo.update(id, dto); }
    removeEtnia(id: number) { return this.etniaRepo.delete(id); }

}