import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { users } from '@prisma/client';
import { hash } from "bcrypt";
import { PrismaService } from '../../db/prisma.service';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private userRepository: UserRepository,
  ) {}
  
  async hashPassword(password: string) {
    return await hash(password, 14);
  }
  
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashPassword(createUserDto.password);
    return this.prisma.users.create({ data: createUserDto });
  }

  // update(id: string, updateUserDTO: UpdateUserDto) {
  //   updateUserDTO.id = id;
  //   return this.prisma.users.update({ data: CreateUserDto });
  // }

  findAll(): Promise<users[]> {
    return this.userRepository.findAll();
  }

  async findByEmail(email: string) {
    return this.prisma.users.findFirst({ where: { email: email } });
  }

  async findOne(id: string) {
    return this.prisma.users.findFirst({ where: { id: id } });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.users.delete({ where: { id: id } });
  }
}
