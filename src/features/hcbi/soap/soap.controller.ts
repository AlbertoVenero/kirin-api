import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SoapService } from './soap.service';
import { CreateSoapDto } from './dto/create-soap.dto';
import { UpdateSoapDto } from './dto/update-soap.dto';
import { CreateSoap2Dto } from './dto/create-soap2.dto';
import { UpdateSoap2Dto } from './dto/update-soap2.dto';

@Controller('soap')
export class SoapController {
  constructor(private readonly soapService: SoapService) {}

  // Endpoints para SOAP
  @Post()
  create(@Body() dto: CreateSoapDto) {
    return this.soapService.create(dto);
  }

  @Get()
  findAll() {
    return this.soapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.soapService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateSoapDto) {
    return this.soapService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.soapService.remove(id);
  }

  // Endpoints para SOAP2
  @Post('soap2')
  createSoap2(@Body() dto: CreateSoap2Dto) {
    return this.soapService.createSoap2(dto);
  }

  @Get('soap2')
  findAllSoap2() {
    return this.soapService.findAllSoap2();
  }

  @Get('soap2/:id')
  findOneSoap2(@Param('id') id: number) {
    return this.soapService.findOneSoap2(id);
  }

  @Put('soap2/:id')
  updateSoap2(@Param('id') id: number, @Body() dto: UpdateSoap2Dto) {
    return this.soapService.updateSoap2(id, dto);
  }

  @Delete('soap2/:id')
  removeSoap2(@Param('id') id: number) {
    return this.soapService.removeSoap2(id);
  }
}
