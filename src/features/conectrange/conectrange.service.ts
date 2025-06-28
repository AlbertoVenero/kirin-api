
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConectRange } from './entities/conectrange.entity';
import { CreateConectRangeDto } from './dto/create-conectrange.dto';
import { UpdateConectRangeDto } from './dto/update-conectrange.dto';

@Injectable()
export class ConectRangeService {
  constructor(
    @InjectRepository(ConectRange)
    private readonly conectRangeRepo: Repository<ConectRange>,
  ) {}

  create(dto: CreateConectRangeDto) {
    const entity = this.conectRangeRepo.create(dto);
    return this.conectRangeRepo.save(entity);
  }

  findAll() {
    return this.conectRangeRepo.find();
  }

  findOne(id: number) {
    return this.conectRangeRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateConectRangeDto) {
    return this.conectRangeRepo.update(id, dto);
  }

  remove(id: number) {
    return this.conectRangeRepo.delete(id);
  }
}
