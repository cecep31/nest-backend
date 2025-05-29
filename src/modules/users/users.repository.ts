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

  async findByUsernameOrEmail(usernameOrEmail: string): Promise<users | null> {
    return this.prisma.users.findFirst({
      where: {
        OR: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });
  }

  async findByUsername(username: string) {
    return await this.prisma.users.findUnique({
      where: { username, deleted_at: null },
      select: {
        id: true,
        username: true,
        email: true,
        image: true,
        created_at: true,
        updated_at: true,
        deleted_at: true,
        first_name: true,
        last_name: true,
        is_super_admin: true,
        profile: {
          select: {
            id: true,
            bio: true,
            website: true,
            phone: true,
            location: true,
          },
        },
      },
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

  async getAllUsers(params: {
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

  async getAllUsersCount(where?: Prisma.usersWhereInput): Promise<number> {
    return this.prisma.users.count({ where });
  }

  async delete(where: Prisma.usersWhereUniqueInput): Promise<users> {
    return this.prisma.users.delete({ where });
  }

  async FindUserById(id: string) {
    return this.prisma.users.findUnique({
      select: {
        id: true,
        username: true,
        email: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
      where: { id },
    });
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
