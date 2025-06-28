import { IsString, Length } from 'class-validator';

export class CreateParroquiaDto {
    @IsString()
    id: string;

    @IsString()
    @Length(1, 60)
    nombre: string;

    @IsString()
    estadoId: string;

    @IsString()
    municipioId: string;
}
