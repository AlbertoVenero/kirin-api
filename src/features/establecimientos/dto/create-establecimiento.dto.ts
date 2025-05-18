import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateEstablecimientoDto {

    @IsString()
    @IsNotEmpty()
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
}
