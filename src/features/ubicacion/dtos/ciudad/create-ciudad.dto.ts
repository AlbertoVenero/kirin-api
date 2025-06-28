import { IsString, Length } from 'class-validator';

export class CreateCiudadDto {
    @IsString()
    id: string;

    @IsString()
    @Length(1, 100)
    nombre: string;

    @IsString()
    estadoId: string;

    @IsString()
    municipioId: string;

    @IsString()
    parroquiaId: string;
}
