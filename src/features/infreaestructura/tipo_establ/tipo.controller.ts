import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';


import { TipoService } from './tipo.service';
import { CreateTipoEstablDto } from './dto/create-tipo-establ.dto';
import { UpdateTipoEstablDto } from './dto/update-tipo-establ.dto';

@Controller('tipo')
export class TipoController {
  constructor(private readonly tipoService: TipoService) {}

  @Post()
  async create(@Body() createTipoDto: CreateTipoEstablDto) {
    try {
      return await this.tipoService.create(createTipoDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.tipoService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.tipoService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTipoDto: UpdateTipoEstablDto) {
    try {
      return await this.tipoService.update(id, updateTipoDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.tipoService.remove(id);
      return { message: 'Tipo eliminado correctamente' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
