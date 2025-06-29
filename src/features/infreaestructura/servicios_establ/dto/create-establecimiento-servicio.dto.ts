import { IsString } from 'class-validator';

export class CreateEstablecimientoServicioDto {
    @IsString()
    idServ: string;

    @IsString()
    name: string;
}
