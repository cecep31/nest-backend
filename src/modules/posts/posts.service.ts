import { Injectable } from '@nestjs/common';
import { posts, post_comments } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private postsRepository: PostsRepository,
  ) {}

  private truncateBody(body?: string, maxLength: number = 200): string {
    if (!body) return '';
    return body.length > maxLength ? body.substring(0, maxLength) + '...' : body;
  }

  async posts(params: { offset?: number; limit?: number }): Promise<posts[]> {
    const { offset, limit } = params;
    const postsData = await this.postsRepository.findAll({
      offset,
      take: limit,
      include: {
        creator: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    return postsData.map(post => ({
      ...post,
      body: this.truncateBody(post.body),
      tags: post.tags,
    }));
  }

  findById(id: string) {
    return this.prisma.posts.findUnique({ where: { id: id } });
  }

  async getPostRandom(limit: number = 6) {
    const postsData = await this.postsRepository.findPostRandom(limit);
    return postsData.map(post => ({
      ...post,
      body: this.truncateBody(post.body),
    }));
  }

  createComment(data: any) {
    data.created_at = new Date();
    return this.prisma.post_comments.create({ data });
  }

  getAllComments(postId: string): Promise<post_comments[]> {
    return this.prisma.post_comments.findMany({
      where: { post_id: postId, parrent_comment_id: null },
      orderBy: { created_at: 'asc' },
      include: { creator: true },
    });
  }

  deletePost(post_id: string) {
    return this.prisma.posts.delete({ where: { id: post_id } });
  }

  async createPost(post: any) {
    const newpost = await this.prisma.posts.create({ data: post });
    return newpost;
  }
}
