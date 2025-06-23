import { IsNotEmpty, IsString } from "class-validator";

export class FuncAsignDto {
    @IsString()
    @IsNotEmpty()
    asig_id: string;

    @IsString()
    @IsNotEmpty()
    establec_id: string;

    @IsString({ each: true })
    funcionarioIds?: string[]; // Para relación OneToMany
}

export class FuncAsignResponseDto extends FuncAsignDto {
    funcionarios?: Array<{ func_id: string }>; // Relación simplificada
}