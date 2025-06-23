import { IsArray, IsBoolean, IsIn, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsString, Length, Min, MinLength, minLength } from "class-validator";

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
    mpps_catast: string;

    @IsString()
    @IsNotEmpty()
    estab_coord: string;

    @IsString()
    @IsLatitude()
    @IsOptional()   
    utm_y: string;

    @IsString()
    @IsLongitude()
    @IsOptional()
    utm_x: string;

    @IsString()
    @IsOptional()
    altitud: string;

    @IsString()
    @IsNotEmpty()
    tipo_estab: string;

    @IsString()
    @IsIn(['REGIONAL', 'MUNICIPAL', 'PARROQUIAL', 'ASIC'])
    nivel_estab: string;
    
    @IsBoolean()
    repo_admin?: boolean = false;

    @IsBoolean()
    isActive?: boolean = true;

    @IsBoolean()
    cond_estab?: boolean = true;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    id_padre: string;

    @IsString()
    @IsNotEmpty()
    @Length(7, 11)
    telefono: string;

    @IsArray()
    @IsString({ each: true })
    estab_serv: string[]; // Array de servic_id (Prestservic)

    @IsString()
    cod_ubigeo: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];

}