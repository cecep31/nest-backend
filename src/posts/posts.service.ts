import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Request } from 'express';
import { Comment_post } from './entities/commentpost.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(Comment_post)
    private commentPostRepository: Repository<Comment_post>,
  ) {}

  create(createPostDto: CreatePostDto, req: any) {
    const creator = new Users();
    creator.id = req.user.id;
    createPostDto.createBy = creator;
    return this.postRepository.save(createPostDto);
  }

  async findAll(req: Request) {
    const querytake = +req.query.take;
    const querypage = +req.query.page;

    const page = querypage || 1; // The desired page number
    const take = querytake || 10; // The number of records per page

    const skip = (page - 1) * take; // Calculate the number of records to skip

    const [data, count] = await this.postRepository.findAndCount({
      skip: skip,
      take: take,
      order: { created_at: 'DESC' },
    });
    return { data: data, count: count };
  }

  findOne(id: string) {
    return this.postRepository.findOne({ where: { id: id } });
  }
  findOnebyslug(slug: string) {
    return this.postRepository.findOne({ where: { slug: slug } });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    updatePostDto.id = id;
    return this.postRepository.save(updatePostDto);
  }

  remove(id: string) {
    return this.postRepository.softDelete(id);
  }

  commentCreate(data: any) {
    return this.commentPostRepository.save(data);
  }
  getAllcomment(post_id: string) {
    return this.commentPostRepository.find({
      where: { post: { id: post_id }, parentCommentId: null },relations: {replies:true},
      order: { created_at: 'DESC' },
    });
  }
}
