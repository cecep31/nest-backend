import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, posts } from '@prisma/client';

@Injectable()
export class PostsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.postsCreateInput): Promise<posts> {
    return this.prisma.posts.create({ data });
  }

  async findAll(params?: {
    offset?: number;
    take?: number;
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput;
    include?: Prisma.postsInclude;
  }): Promise<posts[]> {
    const { offset, take, where, orderBy, include } = params || {};
    return this.prisma.posts.findMany({
      skip: offset || 0,
      take,
      where,
      orderBy,
      include,
    });
  }

  async findOne(where: Prisma.postsWhereUniqueInput, include?: Prisma.postsInclude): Promise<posts | null> {
    return this.prisma.posts.findUnique({ 
      where,
      include
    });
  }

  async findBySlug(slug: string): Promise<posts | null> {
    return this.prisma.posts.findUnique({
      where: { slug },
      include: {
        creator: true,
        likes: true,
        post_comments: true,
        posts_to_tags: {
          include: {
            tags: true
          }
        }
      }
    });
  }

  async update(params: {
    where: Prisma.postsWhereUniqueInput;
    data: Prisma.postsUpdateInput;
  }): Promise<posts> {
    const { where, data } = params;
    return this.prisma.posts.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.postsWhereUniqueInput): Promise<posts> {
    return this.prisma.posts.delete({ where });
  }

  async softDelete(id: string): Promise<posts> {
    return this.prisma.posts.update({
      where: { id },
      data: { deleted_at: new Date() }
    });
  }

  async findPublishedPosts(params?: {
    skip?: number;
    take?: number;
    orderBy?: Prisma.postsOrderByWithRelationInput;
  }): Promise<posts[]> {
    const { skip, take, orderBy } = params || {};
    return this.prisma.posts.findMany({
      where: {
        published: true,
        deleted_at: null
      },
      skip,
      take,
      orderBy,
      include: {
        creator: true,
        likes: true,
        posts_to_tags: {
          include: {
            tags: true
          }
        }
      }
    });
  }

  async countUserPosts(userId: string): Promise<number> {
    return this.prisma.posts.count({
      where: {
        created_by: userId,
        deleted_at: null
      }
    });
  }
}