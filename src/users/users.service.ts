import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  update(id: number, updateUserDTO: UpdateUserDto) {
    updateUserDTO.id = id;
    return this.usersRepository.save(updateUserDTO);
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findByUserName(username: string): Promise<Users> {
    return this.usersRepository.findOneBy({ username });
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
