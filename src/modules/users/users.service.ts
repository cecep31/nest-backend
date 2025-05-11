import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, ResetPasswordDto } from './schemas/user.schema';
import { hash } from "bcrypt";
import { PrismaService } from '../../db/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private userReposistory: UserRepository,
  ) { }

  async hashPassword(password: string) {
    return await hash(password, 14);
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await this.hashPassword(createUserDto.password);
      return await this.prisma.users.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
        select: {
          id: true,
          username: true,
          email: true,
          image: true,
          created_at: true,
          updated_at: true,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('Username or email already exists');
        }
      }
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(id);
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      const data = { ...updateUserDto };
      if (updateUserDto.password) {
        data.password = await this.hashPassword(updateUserDto.password);
      }

      return await this.prisma.users.update({
        where: { id },
        data,
        select: {
          id: true,
          username: true,
          email: true,
          image: true,
          updated_at: true,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('Username or email already exists');
        }
      }
      throw error;
    }
  }

  async getMyProfile(id: string) {
    const user = await this.userReposistory.FindUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    // Return the cached user data instead of making another DB query
    return user;
  }

  async resetPassword(id: string, resetPasswordDto: ResetPasswordDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const hashedPassword = await this.hashPassword(resetPasswordDto.newPassword);
    return await this.prisma.users.update({
      where: { id },
      data: { password: hashedPassword },
      select: {
        id: true,
        username: true,
        email: true,
        updated_at: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.users.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async findByEmailOrUsername(usernameOrEmail: string) {
    return await this.prisma.users.findFirst({
      where: {
        OR: [
          { email: usernameOrEmail },
          { username: usernameOrEmail },
        ],
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        image: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async remove(id: string) {
    try {
      await this.prisma.users.delete({ where: { id } });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
      }
      throw error;
    }
  }
}
