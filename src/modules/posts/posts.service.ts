import { Injectable } from '@nestjs/common';
import { post_comments } from '../../../generated/prisma';
import { PrismaService } from '../../db/prisma.service';
import { PostsRepository } from './posts.repository';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService,
    private postsRepository: PostsRepository,
  ) {}

  private truncateBody(body?: string, maxLength: number = 200): string {
    if (!body) return '';
    return body.length > maxLength
      ? body.substring(0, maxLength) + '...'
      : body;
  }

  async posts(params: { offset?: number; limit?: number }) {
    const { offset, limit } = params;
    const postsData = await this.postsRepository.findAll({
      where: {
        deleted_at: null,
        published: true,
      },
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
    const totalposts = await this.prisma.posts.count({
      where: {
        deleted_at: null,
        published: true,
      },
    });
    return {
      postsData: postsData.map((post) => ({
        ...post,
        body: this.truncateBody(post.body ?? ''),
        tags: post.tags.map((tagRelation) => tagRelation.tag),
      })),
      metadata: {
        totalItems: totalposts,
      },
    };
  }

  async getPostsMine(user_id: string, offset = 0, limit = 10) {
    const posts = await this.postsRepository.getPostsByCreator(
      user_id,
      offset,
      limit,
    );
    const metadata = {
      totalItems: await this.postsRepository.getPostsByCreatorCount(user_id),
    };
    return { posts, metadata };
  }

  findById(id: string) {
    return this.prisma.posts.findUnique({ where: { id: id } });
  }

  async getPostRandom(limit: number = 6) {
    const postsData = await this.postsRepository.findPostRandom(limit);
    return postsData.map((post) => ({
      ...post,
      body: this.truncateBody(post.body ?? ''),
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

  getByUsernameAndSlug(username: string, slug: string) {
    return this.postsRepository.findByUsernameAndSlug(username, slug);
  }

  deletePost(post_id: string) {
    return this.prisma.posts.delete({ where: { id: post_id } });
  }

  async createPost(postData: CreatePostDto, user_id: string) {
    // remove property tags

    const newpost = await this.prisma.posts.create({
      data: {
        created_by: user_id,
        created_at: new Date(),
        title: postData.title,
        body: postData.body,
        slug: postData.slug,
        published: true,
      },
    });
    return newpost;
  }
  async updatePublishPost(post_id: string, published: boolean = true) {
    const post = await this.prisma.posts.update({
      where: { id: post_id },
      data: { published },
    });
    return post;
  }
}
