import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PactHcbi2 } from './entities/pacthcbi2.entity';
import { CreatePactHcbi2Dto } from './dto/create-pacthcbi2.dto';
import { UpdatePactHcbi2Dto } from './dto/update-pacthcbi2.dto';

@Injectable()
export class PactHcbi2Service {
  constructor(
    @InjectRepository(PactHcbi2)
    private readonly pactHcbi2Repo: Repository<PactHcbi2>,
  ) {}

  create(dto: CreatePactHcbi2Dto) {
    const entity = this.pactHcbi2Repo.create(dto);
    return this.pactHcbi2Repo.save(entity);
  }

  findAll() {
    return this.pactHcbi2Repo.find();
  }

  findOne(id: string) {
    return this.pactHcbi2Repo.findOneBy({ pact_nh: id });
  }

  update(id: string, dto: UpdatePactHcbi2Dto) {
    return this.pactHcbi2Repo.update(id, dto);
  }

  remove(id: string) {
    return this.pactHcbi2Repo.delete(id);
  }
}
