import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PactsoapService } from './pactsoap.service';
import { CreatePactsoapDto } from './dto/create-pactsoap.dto';
import { UpdatePactsoapDto } from './dto/update-pactsoap.dto';

@Controller('pactsoap')
export class PactsoapController {
  constructor(private readonly pactsoapService: PactsoapService) {}

  @Post()
  create(@Body() createPactsoapDto: CreatePactsoapDto) {
    return this.pactsoapService.create(createPactsoapDto);
  }

  @Get()
  findAll() {
    return this.pactsoapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pactsoapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePactsoapDto: UpdatePactsoapDto) {
    return this.pactsoapService.update(+id, updatePactsoapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pactsoapService.remove(+id);
  }
}
