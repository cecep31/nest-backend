import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 14);
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
    return this.prisma.users.findMany();
  }

  async findByEmail(email: string): Promise<users> {
    return this.prisma.users.findFirst({ where: { email: email } });
  }

  findOne(id: string): Promise<users> {
    return this.prisma.users.findFirst({ where: { id: id } });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.users.delete({ where: { id: id } });
  }
}
