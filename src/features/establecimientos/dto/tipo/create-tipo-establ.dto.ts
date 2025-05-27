import { IsOptional, IsString, IsArray } from "class-validator";


export class CreateTipoEstablDto { 

    @IsString()
    tipo_establ_id: string;
    
    @IsString()
    tipo_establ_name: string;
    
    @IsString()
    nivel_jerarquico: string;
    
    @IsString()
    descripcion: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    tipo_establ_cod?: string[];

}