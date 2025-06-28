import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateExstack1Dto } from './dto/create-exstack1.dto';
import { ExamenesService } from './examenes.service';
import { UpdateExstack1Dto } from './dto/update-exstack1.dto';
import { CreateExstack2Dto } from './dto/create-exstack2.dto';
import { UpdateExstack2Dto } from './dto/update-exstack2.dto';

@Controller('examenes')
export class ExamenesController {
    constructor(private readonly examenesService: ExamenesService) {}
    // Exstack1
    @Post('exstack1')
    @ApiOperation({ summary: 'Crear tipo de examen (exstack1)' })
    @ApiResponse({ status: 201, description: 'Tipo de examen creado' })
    createExstack1(@Body() dto: CreateExstack1Dto) { return this.examenesService.createExstack1(dto); }
    @Get('exstack1')
    @ApiOperation({ summary: 'Listar tipos de examen (exstack1)' })
    findAllExstack1() { return this.examenesService.findAllExstack1(); }
    @Get('exstack1/:id')
    @ApiOperation({ summary: 'Obtener tipo de examen por ID (exstack1)' })
    findOneExstack1(@Param('id') id: number) { return this.examenesService.findOneExstack1(id); }
    @Put('exstack1/:id')
    @ApiOperation({ summary: 'Actualizar tipo de examen (exstack1)' })
    updateExstack1(@Param('id') id: number, @Body() dto: UpdateExstack1Dto) { return this.examenesService.updateExstack1(id, dto); }
    @Delete('exstack1/:id')
    @ApiOperation({ summary: 'Eliminar tipo de examen (exstack1)' })
    removeExstack1(@Param('id') id: number) { return this.examenesService.removeExstack1(id); }
    
    // Exstack2
    @Post('exstack2')
    @ApiOperation({ summary: 'Crear examen (exstack2)' })
    @ApiResponse({ status: 201, description: 'Examen creado' })
    createExstack2(@Body() dto: CreateExstack2Dto) { return this.examenesService.createExstack2(dto); }
    @Get('exstack2')
    @ApiOperation({ summary: 'Listar exámenes (exstack2)' })
    findAllExstack2() { return this.examenesService.findAllExstack2(); }
    @Get('exstack2/:id')
    @ApiOperation({ summary: 'Obtener examen por ID (exstack2)' })
    findOneExstack2(@Param('id') id: number) { return this.examenesService.findOneExstack2(id); }
    @Put('exstack2/:id')
    @ApiOperation({ summary: 'Actualizar examen (exstack2)' })
    updateExstack2(@Param('id') id: number, @Body() dto: UpdateExstack2Dto) { return this.examenesService.updateExstack2(id, dto); }
    @Delete('exstack2/:id')
    @ApiOperation({ summary: 'Eliminar examen (exstack2)' })
    removeExstack2(@Param('id') id: number) { return this.examenesService.removeExstack2(id); }
    
}
