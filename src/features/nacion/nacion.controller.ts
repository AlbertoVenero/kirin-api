import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateNacionDto } from "./dto/update-nacion.dto";
import { CreateNacionDto } from "./dto/create-nacion.dto";
import { NacionService } from "./nacion.service";

@ApiTags('Nacion')
@Controller('nacion')
export class NacionController {
    constructor(private readonly nacionService: NacionService) { }


    // Nacion
    @Post('nacion')
    @ApiOperation({ summary: 'Crear nación' })
    @ApiResponse({ status: 201, description: 'Nación creada' })
    createNacion(@Body() dto: CreateNacionDto) { return this.nacionService.createNacion(dto); }
    
    @Get('nacion')
    @ApiOperation({ summary: 'Listar naciones' })
    findAllNacion() { return this.nacionService.findAllNacion(); }
    
    @Get('nacion/:id')
    @ApiOperation({ summary: 'Obtener nación por ID' })
    findOneNacion(@Param('id') id: number) { return this.nacionService.findOneNacion(id); }
    
    @Put('nacion/:id')
    @ApiOperation({ summary: 'Actualizar nación' })
    updateNacion(@Param('id') id: number, @Body() dto: UpdateNacionDto) { return this.nacionService.updateNacion(id, dto); }
    
    @Delete('nacion/:id')
    @ApiOperation({ summary: 'Eliminar nación' })
    removeNacion(@Param('id') id: number) { return this.nacionService.removeNacion(id); }
}