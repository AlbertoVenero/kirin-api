import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estado } from './entities/estados.entity';
import { Municipio } from './entities/municipios.entity';
import { Ciudad } from './entities/ciudades.entity';
import { Parroquia } from './entities/parroquias.entity';
import { UbicacionController } from './ubicacion.controller';
import { UbicacionService } from './ubicacion.service';
import { SeedService } from './seed.service';
import { Connection, DataSource } from 'typeorm';
import { SeedController } from './seed.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Estado, Municipio, Ciudad, Parroquia
        ]), // Aquí se deben agregar las entidades correspondientes
    ],
    controllers: [UbicacionController, SeedController],
    providers: [
        UbicacionService,
        SeedService, {
            provide: Connection,
            useFactory: (dataSource: DataSource) => dataSource,
            inject: [DataSource],
        }
    ],
})
export class UbicacionModule { }
