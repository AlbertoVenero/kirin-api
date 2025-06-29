import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncAsignDto } from './create-func_asign.dto';
import { IsDate, IsString } from 'class-validator';

export class UpdateFuncAsignDto extends PartialType(CreateFuncAsignDto) {
    @IsString()
    establec_id: string;

    @IsDate()
    fecha_asig: Date;

    @IsDate()
    fecha_asig_fin?: Date;
}
