import { PartialType } from '@nestjs/mapped-types';
import { CreateMunicipioDto } from '../municipio/create-municipio.dto';

export class UpdateMunicipioDto extends PartialType(CreateMunicipioDto) {}
