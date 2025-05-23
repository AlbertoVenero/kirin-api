import { IsArray, IsNotEmpty, IsOptional, IsString, Length, Min, MinLength, minLength } from "class-validator";

export class CreateEstablecimientoDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    estab_id: string; // Código numérico como string
  
    @IsString()
    @IsNotEmpty()
    estab_name: string;
  
    @IsString()
    @IsNotEmpty()
    estab_direc: string;
  
    @IsString()
    @IsNotEmpty()
    estab_coord: string;
  
    @IsString()
    @IsNotEmpty()
    mpps_catast: string;
  
    @IsArray()
    @IsString({ each: true })
    estab_serv: string[]; // Array de servic_id (Prestservic)

    @IsString()
    @IsNotEmpty()
    @Length(7, 11)
    telefono: string;

    @IsString()
    @IsNotEmpty()
    tipo_estab: string;

    @IsString()
    @IsNotEmpty()
    id_padre: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];

}