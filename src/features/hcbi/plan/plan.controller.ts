import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlanService } from './plan.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller('plan')
export class PlanController {
    
    constructor(private readonly planservice: PlanService) { }
    
    @Post('plan')
    @ApiOperation({ summary: 'Crear plan' })
    @ApiResponse({ status: 201, description: 'Plan creado' })
    createPlan(@Body() dto: CreatePlanDto) { return this.planservice.createPlan(dto); }
    
    @Get('plan')
    @ApiOperation({ summary: 'Listar planes' })
    findAllPlan() { return this.planservice.findAllPlan(); }
    
    @Get('plan/:id')
    @ApiOperation({ summary: 'Obtener plan por ID' })
    findOnePlan(@Param('id') id: number) { return this.planservice.findOnePlan(id); }
    
    @Put('plan/:id')
    @ApiOperation({ summary: 'Actualizar plan' })
    updatePlan(@Param('id') id: number, @Body() dto: UpdatePlanDto) { return this.planservice.updatePlan(id, dto); }
    
    @Delete('plan/:id')
    @ApiOperation({ summary: 'Eliminar plan' })
    removePlan(@Param('id') id: number) { return this.planservice.removePlan(id); }

}
