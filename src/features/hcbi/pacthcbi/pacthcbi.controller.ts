import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacthcbiService } from './pacthcbi.service';
import { CreatePacthcbiDto } from './dto/create-pacthcbi.dto';
import { UpdatePacthcbiDto } from './dto/update-pacthcbi.dto';

@Controller('pacthcbi')
export class PacthcbiController {
  constructor(private readonly pacthcbiService: PacthcbiService) {}

  @Post()
  create(@Body() createPacthcbiDto: CreatePacthcbiDto) {
    return this.pacthcbiService.create(createPacthcbiDto);
  }

  @Get()
  findAll() {
    return this.pacthcbiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacthcbiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePacthcbiDto: UpdatePacthcbiDto) {
    return this.pacthcbiService.update(+id, updatePacthcbiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacthcbiService.remove(+id);
  }
}
