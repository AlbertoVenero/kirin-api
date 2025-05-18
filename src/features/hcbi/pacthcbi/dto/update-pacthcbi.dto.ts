import { PartialType } from '@nestjs/mapped-types';
import { CreatePacthcbiDto } from './create-pacthcbi.dto';

export class UpdatePacthcbiDto extends PartialType(CreatePacthcbiDto) {}
