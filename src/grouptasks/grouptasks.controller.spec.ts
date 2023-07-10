import { Test, TestingModule } from '@nestjs/testing';
import { GrouptasksController } from './grouptasks.controller';
import { GrouptasksService } from './grouptasks.service';

describe('GrouptasksController', () => {
  let controller: GrouptasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrouptasksController],
      providers: [GrouptasksService],
    }).compile();

    controller = module.get<GrouptasksController>(GrouptasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
