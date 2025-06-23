import { Controller, Get, Post } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { SeedService } from './seed.service';


@Controller('ubicacion')
export class UbicacionController {
    constructor(
        private readonly ubicacionService: UbicacionService,
        private readonly seedService: SeedService
    ) { }


    @Post('seed')
    async seedData() {
        return this.seedService.seedData();
    }

    @Get('estados')
    async getEstados() {
        return this.ubicacionService.findAllEstados();
    }

    // Endpoints similares para municipios/ciudades/parroquias
}