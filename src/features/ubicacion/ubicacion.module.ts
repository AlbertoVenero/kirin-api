import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estado } from './entities/estados.entity';
import { Municipio } from './entities/municipios.entity';
import { Ciudad } from './entities/ciudades.entity';
import { Parroquia } from './entities/parroquias.entity';
import { UbicacionController } from './ubicacion.controller';
import { UbicacionService } from './ubicacion.service';
import { Connection, DataSource } from 'typeorm';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            Estado, Municipio, Ciudad, Parroquia
        ]), // Aquí se deben agregar las entidades correspondientes
    ],
    controllers: [UbicacionController],
    providers: [UbicacionService,
    ],
})
export class UbicacionModule { }
