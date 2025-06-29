import { IsArray, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class FuncTurnosDto {
    @IsArray()
    @IsDate({ each: true }) // Array de fechas
    @IsNotEmpty()
    funcfguard: Date[];

    @IsString()
    @IsNotEmpty()
    functguard: string;

    @IsInt()
    @IsNotEmpty()
    estab_id: number;

    @IsString() // Se recibe funcced, pero se guarda func_id
    @IsNotEmpty()
    funcced: string; // Identificador externo
}

export class FuncTurnosResponseDto {
    turn_id: string;
    funcfguard: Date[];
    functguard: string;
    estab_id: number;
    funcionario: { funcced: string }; // Muestra el UUID
}
