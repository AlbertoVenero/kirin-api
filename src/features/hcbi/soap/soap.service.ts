import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Soap } from './entities/soap.entity';
import { Soap2 } from './entities/soap2.entity';
import { CreateSoapDto } from './dto/create-soap.dto';
import { UpdateSoapDto } from './dto/update-soap.dto';
import { CreateSoap2Dto } from './dto/create-soap2.dto';
import { UpdateSoap2Dto } from './dto/update-soap2.dto';

@Injectable()
export class SoapService {
  constructor(
    @InjectRepository(Soap)
    private readonly soapRepo: Repository<Soap>,
    @InjectRepository(Soap2)
    private readonly soap2Repo: Repository<Soap2>,
  ) {}

  // Métodos para SOAP
  create(dto: CreateSoapDto) {
    const entity = this.soapRepo.create(dto);
    return this.soapRepo.save(entity);
  }

  findAll() {
    return this.soapRepo.find();
  }

  findOne(id: number) {
    return this.soapRepo.findOneBy({ soap_id: id });
  }

  update(id: number, dto: UpdateSoapDto) {
    return this.soapRepo.update(id, dto);
  }

  remove(id: number) {
    return this.soapRepo.delete(id);
  }

  // Métodos para SOAP2
  createSoap2(dto: CreateSoap2Dto) {
    const entity = this.soap2Repo.create(dto);
    return this.soap2Repo.save(entity);
  }

  findAllSoap2() {
    return this.soap2Repo.find();
  }

  findOneSoap2(id: number) {
    return this.soap2Repo.findOneBy({ soap_id: id });
  }

  updateSoap2(id: number, dto: UpdateSoap2Dto) {
    return this.soap2Repo.update(id, dto);
  }

  removeSoap2(id: number) {
    return this.soap2Repo.delete(id);
  }
}
