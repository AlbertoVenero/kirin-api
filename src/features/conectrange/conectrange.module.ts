import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConectRangeController } from './conectrange.controller';
import { ConectRangeService } from './conectrange.service';
import { ConectRange } from './entities/conectrange.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConectRange])],
  controllers: [ConectRangeController],
  providers: [ConectRangeService],
  exports: [ConectRangeService],
})
export class ConectRangeModule {}
