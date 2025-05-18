import { Test, TestingModule } from '@nestjs/testing';
import { PacthcbiController } from './pacthcbi.controller';
import { PacthcbiService } from './pacthcbi.service';

describe('PacthcbiController', () => {
  let controller: PacthcbiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacthcbiController],
      providers: [PacthcbiService],
    }).compile();

    controller = module.get<PacthcbiController>(PacthcbiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
