import { Controller, Get, Param } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';



@Controller('ubicacion')
export class UbicacionController {
    constructor(
        private readonly ubicacionService: UbicacionService,
        
    ) { }


    @Get('estados')
    async getEstados() {
        return this.ubicacionService.findAllEstados();
    }

    @Get('municipios/:estadoId')
    async getMunicipiosByEstado(@Param('estadoId') estadoId: string) {
        return this.ubicacionService.findMunicipiosByEstado(estadoId);
    }

    @Get('parroquias/:municipioId')
    async getParroquiasByMunicipio(@Param('municipioId') municipioId: string) {
        return this.ubicacionService.findParroquiasByMunicipio(municipioId);
    }

    @Get('ciudades/municipio/:municipioId')
    async getCiudadesByMunicipio(@Param('municipioId') municipioId: string) {
        return this.ubicacionService.findCiudadesByMunicipio(municipioId);
    }

    @Get('ciudades/:parroquiaId')
    async getCiudadesByParroquia(@Param('parroquiaId') parroquiaId: string) {
        return this.ubicacionService.findCiudadesByParroquia(parroquiaId);
    }
}