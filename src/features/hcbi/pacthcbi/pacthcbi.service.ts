import { Injectable } from '@nestjs/common';
import { CreatePacthcbiDto } from './dto/create-pacthcbi.dto';
import { UpdatePacthcbiDto } from './dto/update-pacthcbi.dto';

@Injectable()
export class PacthcbiService {
  create(createPacthcbiDto: CreatePacthcbiDto) {
    return 'This action adds a new pacthcbi';
  }

  findAll() {
    return `This action returns all pacthcbi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pacthcbi`;
  }

  update(id: number, updatePacthcbiDto: UpdatePacthcbiDto) {
    return `This action updates a #${id} pacthcbi`;
  }

  remove(id: number) {
    return `This action removes a #${id} pacthcbi`;
  }
}
