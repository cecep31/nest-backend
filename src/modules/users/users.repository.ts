import { PrismaService } from 'src/prisma.service';

export class UserRepository {
  constructor(private prisma: PrismaService) {}

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
