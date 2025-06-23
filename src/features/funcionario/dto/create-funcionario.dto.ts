import { isBoolean, IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID, MinLength } from "class-validator";


export class CreateFuncionarioDto {
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  funcced: string;

  @IsString()
  @IsNotEmpty()
  funcname: string;

  @IsString()
  @IsNotEmpty()
  funcaped: string;

  @IsString()
  @IsNotEmpty()
  functipo: string;

  @IsString()
  @IsNotEmpty()
  funcpass: string;

  @IsString()
  @IsOptional()
  estab_id: string;

  @IsBoolean()
  funcactive: boolean;
}

export class FuncionarioResponseDto {
    @IsUUID()
    func_id: string;
    funcced: string;
    funcname: string;
    funcaped: string;
    functipo: string;
    funcactive: boolean;
}

