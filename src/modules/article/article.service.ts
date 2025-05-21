import { Injectable } from '@nestjs/common';
import { PostsRepository } from '../posts/posts.repository';

@Injectable()
export class ArticleService {
  constructor(private postsRepository: PostsRepository) {}

  async findAll(params: { offset?: number; limit?: number }) {
    return this.postsRepository.findAll({
      ...params,
      where: { deleted_at: null },
    });
  }

  async findById(id: string) {
    return this.postsRepository.findOne({ id });
  }

  async deleteArticle(id: string) {
    return this.postsRepository.delete({ id });
  }

  async createArticle(data: any) {
    return this.postsRepository.create(data);
  }

}