import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../posts/posts.repository';

@Injectable()
export class AdminService {
  constructor(private readonly postRepository: PostsRepository) { }


  async getAllPosts(limit: number, offset: number) {
    return await this.postRepository.findAll({
      offset,
      take: limit,
    });
  }
}
