import { PartialType } from '@nestjs/mapped-types';
import { CreatePactsoapDto } from './create-pactsoap.dto';

export class UpdatePactsoapDto extends PartialType(CreatePactsoapDto) {}
