import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PactHcbi2Service } from './pacthcbi2.service';
import { CreatePactHcbi2Dto } from './dto/create-pacthcbi2.dto';
import { UpdatePactHcbi2Dto } from './dto/update-pacthcbi2.dto';

@Controller('pacthcbi2')
export class PactHcbi2Controller {
  constructor(private readonly pactHcbi2Service: PactHcbi2Service) {}

  @Post()
  create(@Body() dto: CreatePactHcbi2Dto) {
    return this.pactHcbi2Service.create(dto);
  }

  @Get()
  findAll() {
    return this.pactHcbi2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pactHcbi2Service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePactHcbi2Dto) {
    return this.pactHcbi2Service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pactHcbi2Service.remove(id);
  }
}
