import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConectRangeService } from './conectrange.service';
import { CreateConectRangeDto } from './dto/create-conectrange.dto';
import { UpdateConectRangeDto } from './dto/update-conectrange.dto';

@Controller('conectrange')
export class ConectRangeController {
  constructor(private readonly conectRangeService: ConectRangeService) {}

  @Post()
  create(@Body() dto: CreateConectRangeDto) {
    return this.conectRangeService.create(dto);
  }

  @Get()
  findAll() {
    return this.conectRangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.conectRangeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateConectRangeDto) {
    return this.conectRangeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.conectRangeService.remove(id);
  }
}
