import { Test, TestingModule } from '@nestjs/testing';
import { PacthcbiService } from './pacthcbi.service';

describe('PacthcbiService', () => {
  let service: PacthcbiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacthcbiService],
    }).compile();

    service = module.get<PacthcbiService>(PacthcbiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
