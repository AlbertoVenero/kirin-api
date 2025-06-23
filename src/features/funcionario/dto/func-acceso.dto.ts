import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class FuncAccesoDto {
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    funcservice: string[];

    @IsBoolean()
    funchcbi: boolean;

    @IsBoolean()
    funclegal: boolean;

    @IsString() // Se recibe funcced, pero se guarda func_id
    @IsNotEmpty()
    funcced: string; // Identificador externo
}

export class FuncAccesoResponseDto {
    acces_id: string;
    funcservice: string[];
    funchcbi: boolean;
    funclegal: boolean;
    funcionario: { func_id: string }; // Muestra el UUID
}