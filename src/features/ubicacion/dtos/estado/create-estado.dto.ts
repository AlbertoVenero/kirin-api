import { IsString, Length } from 'class-validator';

export class CreateEstadoDto {
    @IsString()
    id: string;

    @IsString()
    @Length(1, 60)
    nombre: string;
}
