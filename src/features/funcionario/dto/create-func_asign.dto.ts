import { IsString, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateFuncAsignDto {
    @IsString()
    @IsNotEmpty()
    asig_id: string;

    @IsString()
    @IsNotEmpty()
    establec_id: string;

    @IsDate()
    @IsNotEmpty()
    fecha_asig: Date;

    @IsDate()
    @IsOptional()
    fecha_asig_fin?: Date;
}
