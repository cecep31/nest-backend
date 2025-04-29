import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { Prisma, users } from '../../../generated/prisma';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.usersCreateInput): Promise<users> {
    return this.prisma.users.create({ data });
  }

  async findAll(params?: {
    skip?: number;
    take?: number;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput;
  }): Promise<users[]> {
    const { skip, take, where, orderBy } = params || {};
    return this.prisma.users.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async findOne(where: Prisma.usersWhereUniqueInput): Promise<users | null> {
    return this.prisma.users.findUnique({ where });
  }

  async findByEmail(email: string): Promise<users | null> {
    return this.prisma.users.findUnique({
      where: { email },
    });
  }

  async findByUsername(username: string): Promise<users | null> {
    return this.prisma.users.findUnique({
      where: { username },
    });
  }

  async update(params: {
    where: Prisma.usersWhereUniqueInput;
    data: Prisma.usersUpdateInput;
  }): Promise<users> {
    const { where, data } = params;
    return this.prisma.users.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.usersWhereUniqueInput): Promise<users> {
    return this.prisma.users.delete({ where });
  }

  async softDelete(id: string): Promise<users> {
    return this.prisma.users.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.users.delete({ where: { id: id } });
  }
}
