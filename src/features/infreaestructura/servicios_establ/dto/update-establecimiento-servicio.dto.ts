import { PartialType } from '@nestjs/mapped-types';
import { CreateEstablecimientoServicioDto } from './create-establecimiento-servicio.dto';

export class UpdateEstablecimientoServicioDto extends PartialType(CreateEstablecimientoServicioDto) {}
