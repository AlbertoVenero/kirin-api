import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesCatalogService } from './services-catalog.service';
import { CreateServicesCatalogDto } from './dto/create-services-catalog.dto';
import { UpdateServicesCatalogDto } from './dto/update-services-catalog.dto';

@Controller('services-catalog')
export class ServicesCatalogController {
  constructor(private readonly servicesCatalogService: ServicesCatalogService) {}

  @Post()
  create(@Body() createServicesCatalogDto: CreateServicesCatalogDto) {
    return this.servicesCatalogService.create(createServicesCatalogDto);
  }

  @Get()
  findAll() {
    return this.servicesCatalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesCatalogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicesCatalogDto: UpdateServicesCatalogDto) {
    return this.servicesCatalogService.update(+id, updateServicesCatalogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesCatalogService.remove(+id);
  }
}
