import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';


import { EstablecimientosService } from './establecimientos.service';
import { CreateEstablecimientoDto } from './dtos/create-establecimiento.dto';
import { UpdateEstablecimientoDto } from './dtos/update-establecimiento.dto';


@Controller('establecimientos')
export class EstablecimientosController {
  constructor(private readonly establecimientosService: EstablecimientosService) {}

  @Post()
  async create(@Body() createEstablecimientoDto: CreateEstablecimientoDto) {
    try {
      return await this.establecimientosService.create(createEstablecimientoDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.establecimientosService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.establecimientosService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEstablecimientoDto: UpdateEstablecimientoDto) {
    try {
      return await this.establecimientosService.update(id, updateEstablecimientoDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.establecimientosService.remove(id);
      return { message: 'Establecimiento eliminado correctamente' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
