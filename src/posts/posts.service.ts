import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto, req: any) {
    const creator = new Users();
    creator.id = req.user.id;
    createPostDto.createBy = creator;
    return this.postRepository.save(createPostDto);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: string) {
    return this.postRepository.findOne({ where: { id: id } });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    updatePostDto.id = id;
    return this.postRepository.save(updatePostDto);
  }

  remove(id: string) {
    return this.postRepository.softDelete(id);
  }
}
