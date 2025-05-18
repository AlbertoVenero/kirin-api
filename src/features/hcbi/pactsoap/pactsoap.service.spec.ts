import { Test, TestingModule } from '@nestjs/testing';
import { PactsoapService } from './pactsoap.service';

describe('PactsoapService', () => {
  let service: PactsoapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PactsoapService],
    }).compile();

    service = module.get<PactsoapService>(PactsoapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
