import { Test, TestingModule } from '@nestjs/testing';
import { ServicesCatalogController } from './services-catalog.controller';
import { ServicesCatalogService } from './services-catalog.service';

describe('ServicesCatalogController', () => {
  let controller: ServicesCatalogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesCatalogController],
      providers: [ServicesCatalogService],
    }).compile();

    controller = module.get<ServicesCatalogController>(ServicesCatalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
