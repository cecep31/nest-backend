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

  async posts(params: { offset?: number; limit?: number }): Promise<posts[]> {
    const { offset, limit } = params;
    const posts = await this.postsRepository.findAll({
      offset,
      take: limit,
      include: {
        creator: true,
        post_comments: true,
        posts_to_tags: {
          include: {
            tags: true,
          },
        },
      },
    });
    return posts.map((post) => {
      return {
        ...post,
        body: post.body?.substring(0, 200) || '' + '...',
      };
    });
  }

  findById(id: string) {
    return this.prisma.posts.findUnique({ where: { id: id } });
  }

  commentCreate(data: any) {
    data.created_at = new Date();
    return this.prisma.post_comments.create({ data: data });
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

  createPost(post: any) {
    const newpost = this.prisma.posts.create({ data: post });
    return newpost;
  }
}
