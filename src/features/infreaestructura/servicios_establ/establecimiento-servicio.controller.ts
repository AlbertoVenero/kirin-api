import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EstablecimientoServicioService } from './establecimiento-servicio.service';
import { CreateEstablecimientoServicioDto } from './dto/create-establecimiento-servicio.dto';
import { UpdateEstablecimientoServicioDto } from './dto/update-establecimiento-servicio.dto';


@Controller('establecimiento-servicio')
export class EstablecimientoServicioController {
    constructor(private readonly establecimientoServicioService: EstablecimientoServicioService) { }

    @Post()
    create(@Body() createDto: CreateEstablecimientoServicioDto) {
        return this.establecimientoServicioService.create(createDto);
    }

    @Get()
    findAll() {
        return this.establecimientoServicioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.establecimientoServicioService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdateEstablecimientoServicioDto) {
        return this.establecimientoServicioService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.establecimientoServicioService.remove(id);
    }
}
