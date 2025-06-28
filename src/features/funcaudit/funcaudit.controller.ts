import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FuncAuditService } from './funcaudit.service';
import { CreateFuncAuditDto } from './dto/create-funcaudit.dto';
import { UpdateFuncAuditDto } from './dto/update-funcaudit.dto';

@Controller('funcaudit')
export class FuncAuditController {
  constructor(private readonly funcAuditService: FuncAuditService) {}

  @Post()
  create(@Body() dto: CreateFuncAuditDto) {
    return this.funcAuditService.create(dto);
  }

  @Get()
  findAll() {
    return this.funcAuditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcAuditService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFuncAuditDto) {
    return this.funcAuditService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcAuditService.remove(id);
  }
}
