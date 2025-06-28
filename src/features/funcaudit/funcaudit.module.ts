import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncAuditController } from './funcaudit.controller';
import { FuncAuditService } from './funcaudit.service';
import { FuncAudit } from './entities/funcaudit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FuncAudit])],
  controllers: [FuncAuditController],
  providers: [FuncAuditService],
  exports: [FuncAuditService],
})
export class FuncAuditModule {}
