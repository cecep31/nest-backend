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
  }) {
    const { offset, take, where, orderBy, include } = params || {};
    return this.prisma.posts.findMany({
      skip: offset || 0,
      take,
      where,
      orderBy,
      include,
    });
  }

  async findOne(
    where: Prisma.postsWhereUniqueInput,
    include?: Prisma.postsInclude,
  ) {
    return this.prisma.posts.findUnique({
      where,
      include,
    });
  }

  async findBySlug(slug: string): Promise<posts | null> {
    return this.prisma.posts.findUnique({
      where: { slug },
      include: {
        creator: true,
        likes: true,
        post_comments: true,
        tags: {
          include: {
            tag: true,
          },
        },
      },
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
      data: { deleted_at: new Date() },
    });
  }

  async findPostRandom(limit: number = 6) {
    return this.prisma.$queryRaw<posts[]>`
      SELECT p.*, 
        json_build_object('id', u.id, 'username', u.username, 'email', u.email) as creator,
        (
          SELECT json_agg(json_build_object('id', t.id, 'name', t.name))
          FROM posts_to_tags pt
          JOIN tags t ON pt.tag_id = t.id
          WHERE pt.post_id = p.id
        ) as tags
      FROM posts p
      JOIN users u ON p.created_by = u.id
      WHERE p.deleted_at IS NULL
      ORDER BY RANDOM()
      LIMIT ${limit}
    `;
  }

  async findPublishedPosts(params?: {
    skip?: number;
    take?: number;
    orderBy?: Prisma.postsOrderByWithRelationInput;
  }) {
    const { skip, take, orderBy } = params || {};
    return this.prisma.posts.findMany({
      where: {
        published: true,
        deleted_at: null,
      },
      skip,
      take,
      orderBy,
      include: {
        creator: true,
        likes: true,
        post_comments: false,
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  async countUserPosts(userId: string): Promise<number> {
    return this.prisma.posts.count({
      where: {
        created_by: userId,
        deleted_at: null,
      },
    });
  }
}
