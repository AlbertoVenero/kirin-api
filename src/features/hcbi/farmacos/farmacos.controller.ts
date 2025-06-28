import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FarmacosService } from './farmacos.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateFarmacosDto } from './dto/create-farmacos.dto';
import { UpdateFarmacosDto } from './dto/update-farmacos.dto';

@Controller('farmacos')
export class FarmacosController {
    constructor(private readonly farmacosService: FarmacosService) { }

    @Post('farmacos')
    @ApiResponse({ status: 201, description: 'Fármaco creado' })
    @ApiOperation({ summary: 'Crear fármaco' })
    createFarmacos(@Body() dto: CreateFarmacosDto) { return this.farmacosService.createFarmacos(dto); }

    @Get('farmacos')
    @ApiOperation({ summary: 'Listar fármacos' })
    findAllFarmacos() { return this.farmacosService.findAllFarmacos(); }

    @Get('farmacos/:id')
    @ApiOperation({ summary: 'Obtener fármaco por ID' })
    findOneFarmacos(@Param('id') id: number) { return this.farmacosService.findOneFarmacos(id); }

    @Put('farmacos/:id')
    @ApiOperation({ summary: 'Actualizar fármaco' })
    updateFarmacos(@Param('id') id: number, @Body() dto: UpdateFarmacosDto) { return this.farmacosService.updateFarmacos(id, dto); }

    @Delete('farmacos/:id')
    @ApiOperation({ summary: 'Eliminar fármaco' })
    removeFarmacos(@Param('id') id: number) { return this.farmacosService.removeFarmacos(id); }
}
