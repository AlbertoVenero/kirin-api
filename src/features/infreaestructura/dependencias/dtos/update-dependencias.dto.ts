import { IsArray, IsOptional, IsString } from "class-validator";


export class UpdateDependenciaDto { 

    @IsString()
    @IsOptional()
    readonly depend_name: string;
    
    @IsString()
    @IsOptional()
    readonly nivel_jerarquico: string;
    
    @IsString()
    @IsOptional()
    readonly descripcion: string;
    
    @IsString()
    @IsArray()
    @IsOptional()
    readonly depend_cod?: string[];

}