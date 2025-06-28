import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PactHcbi3Service } from './pacthcbi3.service';
import { CreatePactHcbi3Dto } from './dto/create-pacthcbi3.dto';
import { UpdatePactHcbi3Dto } from './dto/update-pacthcbi3.dto';

@Controller('pacthcbi3')
export class PactHcbi3Controller {
  constructor(private readonly pactHcbi3Service: PactHcbi3Service) {}

  @Post()
  create(@Body() dto: CreatePactHcbi3Dto) {
    return this.pactHcbi3Service.create(dto);
  }

  @Get()
  findAll() {
    return this.pactHcbi3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pactHcbi3Service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePactHcbi3Dto) {
    return this.pactHcbi3Service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pactHcbi3Service.remove(id);
  }
}
