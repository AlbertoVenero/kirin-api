import { Injectable } from '@nestjs/common';
import { CreatePactsoapDto } from './dto/create-pactsoap.dto';
import { UpdatePactsoapDto } from './dto/update-pactsoap.dto';

@Injectable()
export class PactsoapService {
  create(createPactsoapDto: CreatePactsoapDto) {
    return 'This action adds a new pactsoap';
  }

  findAll() {
    return `This action returns all pactsoap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pactsoap`;
  }

  update(id: number, updatePactsoapDto: UpdatePactsoapDto) {
    return `This action updates a #${id} pactsoap`;
  }

  remove(id: number) {
    return `This action removes a #${id} pactsoap`;
  }
}
