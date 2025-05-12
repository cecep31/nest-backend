import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  async getAllTags() {
    return await this.prisma.tags.findMany({
      select: {
        name: true,
      },
    });
  }
}
