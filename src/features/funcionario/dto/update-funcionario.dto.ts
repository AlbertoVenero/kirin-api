import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateFuncionarioDto {

    @IsString()
    @IsOptional()
    funcname?: string;

    @IsString()
    @IsOptional()
    funcaped?: string;
    
    @IsString()
    @IsOptional()
    functipo?: string;
    
    @IsString()
    @IsOptional()
    funcpass?: string;

    @IsString()
    @IsOptional()
    estab_id?: string;
    
    @IsBoolean()
    @IsOptional()
    funcactive?: boolean;

}
