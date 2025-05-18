import { Injectable } from '@nestjs/common';
import { CreateServicesCatalogDto } from './dto/create-services-catalog.dto';
import { UpdateServicesCatalogDto } from './dto/update-services-catalog.dto';

@Injectable()
export class ServicesCatalogService {
  create(createServicesCatalogDto: CreateServicesCatalogDto) {
    return 'This action adds a new servicesCatalog';
  }

  findAll() {
    return `This action returns all servicesCatalog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicesCatalog`;
  }

  update(id: number, updateServicesCatalogDto: UpdateServicesCatalogDto) {
    return `This action updates a #${id} servicesCatalog`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicesCatalog`;
  }
}
