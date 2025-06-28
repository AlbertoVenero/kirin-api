import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuncAudit } from './entities/funcaudit.entity';
import { CreateFuncAuditDto } from './dto/create-funcaudit.dto';
import { UpdateFuncAuditDto } from './dto/update-funcaudit.dto';

@Injectable()
export class FuncAuditService {
  constructor(
    @InjectRepository(FuncAudit)
    private readonly funcAuditRepo: Repository<FuncAudit>,
  ) {}

  create(dto: CreateFuncAuditDto) {
    const entity = this.funcAuditRepo.create(dto);
    return this.funcAuditRepo.save(entity);
  }

  findAll() {
    return this.funcAuditRepo.find();
  }

  findOne(id: string) {
    return this.funcAuditRepo.findOneBy({ func_id: id });
  }

  update(id: string, dto: UpdateFuncAuditDto) {
    return this.funcAuditRepo.update(id, dto);
  }

  remove(id: string) {
    return this.funcAuditRepo.delete(id);
  }
}
