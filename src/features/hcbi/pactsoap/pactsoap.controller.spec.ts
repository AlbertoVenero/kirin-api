import { Test, TestingModule } from '@nestjs/testing';
import { PactsoapController } from './pactsoap.controller';
import { PactsoapService } from './pactsoap.service';

describe('PactsoapController', () => {
  let controller: PactsoapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PactsoapController],
      providers: [PactsoapService],
    }).compile();

    controller = module.get<PactsoapController>(PactsoapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
