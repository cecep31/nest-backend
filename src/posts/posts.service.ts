import { Injectable } from '@nestjs/common';
import { posts, post_comments } from "@prisma/client";
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(
    private prisma: PrismaService
  ) { }


  async posts(params: {
    ofset?: number;
    limit?: number;
  }): Promise<posts[]> {
    const { ofset, limit } = params;
    return this.prisma.posts.findMany({
      skip: ofset || 0,
      take: limit || 10,
      include: {creator: true},
      orderBy: { created_at: 'desc' },
    });
  }

  findById(id: string) {
    return this.prisma.posts.findUnique({ where: { id: id } })
  }

  commentCreate(data: any) {
    data.created_at = new Date();
    return this.prisma.post_comments.create({ data: data });
  }

  getAllComments(postId: string): Promise<post_comments[]> {
    return this.prisma.post_comments.findMany({
      where: { post_id: postId, parrent_comment_id: null },
      orderBy: { created_at: 'asc' },
      include: { creator: true }
    });
  }

  deletePost(post_id: string) {
    return this.prisma.posts.delete({ where: { id: post_id } });
  }

  createPost(post: any) {
    const newpost = this.prisma.posts.create({ data: post })
    return newpost
  }

}
