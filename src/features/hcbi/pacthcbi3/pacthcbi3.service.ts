import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PactHcbi3 } from './entities/pacthcbi3.entity';
import { CreatePactHcbi3Dto } from './dto/create-pacthcbi3.dto';
import { UpdatePactHcbi3Dto } from './dto/update-pacthcbi3.dto';

@Injectable()
export class PactHcbi3Service {
  constructor(
    @InjectRepository(PactHcbi3)
    private readonly pactHcbi3Repo: Repository<PactHcbi3>,
  ) {}

  create(dto: CreatePactHcbi3Dto) {
    const entity = this.pactHcbi3Repo.create(dto);
    return this.pactHcbi3Repo.save(entity);
  }

  findAll() {
    return this.pactHcbi3Repo.find();
  }

  findOne(id: string) {
    return this.pactHcbi3Repo.findOneBy({ pact_nh: id });
  }

  update(id: string, dto: UpdatePactHcbi3Dto) {
    return this.pactHcbi3Repo.update(id, dto);
  }

  remove(id: string) {
    return this.pactHcbi3Repo.delete(id);
  }
}
