import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EtniaService } from "./etnia.service";
import { CreateEtniaDto } from "./dto/create-etnia.dto";
import { UpdateEtniaDto } from "./dto/update-etnia.dto";


@ApiTags('Etnia')
@Controller('etnia')
export class EtniaController {
    catalogosService: any;
    constructor(private readonly etniaService: EtniaService) { }

    // Etnia
    @Post('etnia')
    @ApiOperation({ summary: 'Crear etnia' })
    @ApiResponse({ status: 201, description: 'Etnia creada' })
    createEtnia(@Body() dto: CreateEtniaDto) { return this.etniaService.createEtnia(dto); }
    @Get('etnia')
    @ApiOperation({ summary: 'Listar etnias' })
    findAllEtnia() { return this.etniaService.findAllEtnia(); }
    @Get('etnia/:id')
    @ApiOperation({ summary: 'Obtener etnia por ID' })
    findOneEtnia(@Param('id') id: number) { return this.etniaService.findOneEtnia(id); }
    @Put('etnia/:id')
    @ApiOperation({ summary: 'Actualizar etnia' })
    updateEtnia(@Param('id') id: number, @Body() dto: UpdateEtniaDto) { return this.etniaService.updateEtnia(id, dto); }
    @Delete('etnia/:id')
    @ApiOperation({ summary: 'Eliminar etnia' })
    removeEtnia(@Param('id') id: number) { return this.etniaService.removeEtnia(id); }
}