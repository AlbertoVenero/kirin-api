import { Injectable } from '@nestjs/common';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlanService {
    constructor(@InjectRepository(Plan) private readonly planRepo: Repository<Plan>,) {}


    // Métodos CRUD para Plan
  createPlan(dto: CreatePlanDto) { return this.planRepo.save(dto); }
  findAllPlan() { return this.planRepo.find(); }
  findOnePlan(id: number) { return this.planRepo.findOneBy({ plan_id: id }); }
  updatePlan(id: number, dto: UpdatePlanDto) { return this.planRepo.update(id, dto); }
  removePlan(id: number) { return this.planRepo.delete(id); }
}
