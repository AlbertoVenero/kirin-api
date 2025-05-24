import { IsOptional, IsString } from "class-validator";


export class CreateDependenciaDto { 

    @IsString()
    depend_id: string;
    
    @IsString()
    depend_name: string;
    
    @IsString()
    nivel_jerarquico: string;
    
    @IsString()
    descripcion: string;

    @IsString()
    @IsOptional()
    depend_cod: string;

}