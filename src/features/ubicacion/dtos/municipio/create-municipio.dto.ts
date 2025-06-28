import { IsString, Length } from 'class-validator';

export class CreateMunicipioDto {
    @IsString()
    id: string;

    @IsString()
    @Length(1, 60)
    nombre: string;

    @IsString()
    estadoId: string;
}
