import { Injectable } from '@nestjs/common';
import { Prisma, posts, post_comments } from "@prisma/client";
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService
  ) { }


  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.postsWhereUniqueInput;
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput;
  }): Promise<posts[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.posts.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findById(id: string) {
    return this.prisma.posts.findUnique({ where: { id: id } })
  }

  commentCreate(data: any) {
    return this.prisma.post_comments.create({ data: data });
  }

  getAllcomment(post_id: string): Promise<post_comments[]> {
    return this.prisma.post_comments.findMany({
      where: { post_id: post_id, parrent_comment_id: null },
      orderBy: { created_at: "desc" }
    });
  }

}
