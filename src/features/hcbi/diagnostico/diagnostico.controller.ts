import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDiagnosticoDto } from './dto/create-diagnostico.dto';
import { UpdateDiagnosticoDto } from './dto/update-diagnostico.dto';
import { DiagnosticoService } from './diagnostico.service';


@Controller('diagnostico')
export class DiagnosticoController {

    constructor(private readonly diagnosticoService: DiagnosticoService) { }


    @Post('diagnostico')
    @ApiOperation({ summary: 'Crear diagnóstico' })
    @ApiResponse({ status: 201, description: 'Diagnóstico creado' })
    createDiagnostico(@Body() dto: CreateDiagnosticoDto) { return this.diagnosticoService.createDiagnostico(dto); }
    
    @Get('diagnostico')
    @ApiOperation({ summary: 'Listar diagnósticos' })
    findAllDiagnostico() { return this.diagnosticoService.findAllDiagnostico(); }
    
    
    @Get('diagnostico/:id')
    @ApiOperation({ summary: 'Obtener diagnóstico por ID' })
    findOneDiagnostico(@Param('id') id: number) { return this.diagnosticoService.findOneDiagnostico(id); }
    
    @Put('diagnostico/:id')
    @ApiOperation({ summary: 'Actualizar diagnóstico' })
    updateDiagnostico(@Param('id') id: number, @Body() dto: UpdateDiagnosticoDto) { return this.diagnosticoService.updateDiagnostico(id, dto); }
    
    @Delete('diagnostico/:id')
    @ApiOperation({ summary: 'Eliminar diagnóstico' })
    removeDiagnostico(@Param('id') id: number) { return this.diagnosticoService.removeDiagnostico(id); }
    
}
