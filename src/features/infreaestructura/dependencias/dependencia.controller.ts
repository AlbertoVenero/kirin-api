import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';

import { CreateDependenciaDto } from './dtos/create-dependencias.dto';
import { UpdateDependenciaDto } from './dtos/update-dependencias.dto';
import { DependenciaService } from './dependencia.service';

@Controller('dependencia')
export class DependenciaController {
  constructor(private readonly dependenciaService: DependenciaService) {}

  @Post()
  async create(@Body() createDependenciaDto: CreateDependenciaDto) {
    try {
      return await this.dependenciaService.create(createDependenciaDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.dependenciaService.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.dependenciaService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDependenciaDto: UpdateDependenciaDto) {
    try {
      return await this.dependenciaService.update(id, updateDependenciaDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.dependenciaService.remove(id);
      return { message: 'Dependencia eliminada correctamente' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
