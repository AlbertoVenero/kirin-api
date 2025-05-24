import { PartialType } from '@nestjs/mapped-types';
import { CreateEstablecimientoDto } from './create-establecimiento.dto';
import { IsArray, IsBoolean, IsIn, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsString, Length, MinLength } from 'class-validator';

export class UpdateEstablecimientoDto {

    
        @IsString()
        @IsOptional()
        readonly estab_name: string;
      
        @IsString()
        @IsOptional()
        readonly estab_direc: string;
      
        @IsString()
        @IsOptional()
        readonly mpps_catast: string;

        @IsString()
        @IsOptional()
        readonly estab_coord: string;

        @IsString()
        @IsLatitude()
        @IsOptional()
        readonly utm_y: string;
        
        @IsString()
        @IsLongitude()
        @IsOptional()
        readonly utm_x: string;

        @IsString()
        @IsOptional()
        readonly altitud: string;

        @IsString()
        @IsOptional()
        readonly tipo_estab: string;

        @IsString()
        @IsIn(['REGIONAL', 'MUNICIPAL', 'PARROQUIAL', 'ASIC'])
        readonly nivel_estab: string;

        @IsBoolean()
        @IsOptional()
        readonly repo_admin?: boolean = false;
        
        @IsBoolean()
        @IsOptional()
        readonly isActive?: boolean = true;
        
        @IsBoolean()
        @IsOptional()
        readonly cond_estab?: boolean = true;

        @IsString()
        @IsOptional()
        readonly id_padre: string;

        @IsString()
        @IsOptional()
        @Length(7, 11)
        readonly telefono: string;

        @IsArray()
        @IsString({ each: true })
        @IsOptional()
        readonly estab_serv: string[]; // Array de servic_id (Prestservic)

        @IsString()
        @IsOptional()
        readonly cod_ubigeo: string;

        @IsString({ each: true })
        @IsArray()
        @IsOptional()
        readonly images?: string[];

}
