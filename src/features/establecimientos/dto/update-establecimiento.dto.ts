import { PartialType } from '@nestjs/mapped-types';
import { CreateEstablecimientoDto } from './create-establecimiento.dto';
import { IsArray, IsNotEmpty, IsOptional, IsString, Length, MinLength } from 'class-validator';

export class UpdateEstablecimientoDto {

    
        @IsString()
        @IsOptional()
        readonly estab_name: string;
      
        @IsString()
        @IsOptional()
        readonly estab_direc: string;
      
        @IsString()
        @IsOptional()
        readonly estab_coord: string;
      
        @IsString()
        @IsOptional()
        readonly mpps_catast: string;
      
        @IsArray()
        @IsString({ each: true })
        @IsOptional()
        readonly estab_serv: string[]; // Array de servic_id (Prestservic)
    
        @IsString()
        @IsOptional()
        @Length(7, 11)
        readonly telefono: string;
    
        @IsString()
        @IsOptional()
        readonly tipo_estab: string;
    
        @IsString()
        @IsOptional()
        readonly id_padre: string;

        @IsString({ each: true })
        @IsArray()
        @IsOptional()
        readonly images?: string[];

}
