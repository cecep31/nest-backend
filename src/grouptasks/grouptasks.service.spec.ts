import { Test, TestingModule } from '@nestjs/testing';
import { GrouptasksService } from './grouptasks.service';

describe('GrouptasksService', () => {
  let service: GrouptasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrouptasksService],
    }).compile();

    service = module.get<GrouptasksService>(GrouptasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
