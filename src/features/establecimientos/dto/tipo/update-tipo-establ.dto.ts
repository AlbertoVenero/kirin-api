import { IsArray, IsOptional, IsString,  } from "class-validator";



export class UpdateTipoEstablDto { 

    @IsString()
    @IsOptional()
    readonly tipo_establ_name: string;
    
    @IsString()
    @IsOptional()
    readonly nivel_jerarquico: string;
    
    @IsString()
    @IsOptional()
    readonly descripcion: string;
    
    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    readonly tipo_establ_cod: string[];

}