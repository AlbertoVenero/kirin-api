import { Injectable } from '@nestjs/common';
import { CreateEstablecimientoDto } from './dto/create-establecimiento.dto';
import { UpdateEstablecimientoDto } from './dto/update-establecimiento.dto';
import { Repository } from 'typeorm';
import { Establecimiento } from './entities/establecimiento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EstablecimientoImage } from './entities/establecimiento-images.entity';

@Injectable()
export class EstablecimientosService {
  constructor(
    @InjectRepository(Establecimiento)
    private readonly establecimientoRepository: Repository<Establecimiento>,
    @InjectRepository(EstablecimientoImage)
    private readonly establecimientoImagesRepository: Repository<EstablecimientoImage>,
  ) {}



  async create(createEstablecimientoDto: CreateEstablecimientoDto) {
    try {
      const {images = [], ...establecimientoData} = createEstablecimientoDto;
      const establecimiento = this.establecimientoRepository.create({
        ...establecimientoData,
        images: images.map((image) => this.establecimientoImagesRepository.create({ url:image })),
      });
      await this.establecimientoRepository.save(establecimiento);
      return establecimiento;
    } catch (error) {
      
    }
  }

  async findAll() {
    const establecimiento = await this.establecimientoRepository.find();
    return establecimiento.map((establecimiento) => ({
      ...establecimiento,
      images: establecimiento.images ? establecimiento.images.map((image) => image.url) : [],
    }));
  }

  async findOne(id: string) {
    const establecimiento = await this.establecimientoRepository.findOneBy({ estab_id: id });
    if (!establecimiento) {
      throw new Error(`Establecimiento with id ${id} not found`);
    }
    return establecimiento;
  }

  async update(id: string, updateEstablecimientoDto: UpdateEstablecimientoDto) {
    
    const toUpdate = updateEstablecimientoDto;
    const updateEstab = await this.establecimientoRepository.preload({
      estab_id: id,
      ...toUpdate,
      images: toUpdate.images ? await Promise.all(toUpdate.images.map(async (image) => {
        const newImage = this.establecimientoImagesRepository.create({ url: image });
        return await this.establecimientoImagesRepository.save(newImage);
      })) : [],
    });

    if (!updateEstab) {
      throw new Error(`Establecimiento with id ${id} not found`);
    }

    await this.establecimientoRepository.save(updateEstab);
    return updateEstab;
  }

  async remove(id: string) {
    const establecimiento = await this.findOne(id);
    if (!establecimiento) {
      throw new Error(`Establecimiento with id ${id} not found`);
    }
    await this.establecimientoRepository.remove(establecimiento);
  }
}
