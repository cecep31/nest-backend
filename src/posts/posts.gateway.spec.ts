import { Test, TestingModule } from '@nestjs/testing';
import { PostsGateway } from './posts.gateway';

describe('PostsGateway', () => {
  let gateway: PostsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsGateway],
    }).compile();

    gateway = module.get<PostsGateway>(PostsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
