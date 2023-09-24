import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Users } from 'src/users/entities/user.entity';
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

  create(createPostDto: CreatePostDto, req: any) {
    const creator = new Users();
    creator.id = req.user.id;
    createPostDto.createBy = creator;
    return null;
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
