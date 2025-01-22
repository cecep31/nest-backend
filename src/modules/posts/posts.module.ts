import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from '../../prisma.service';
import { PostsGateway } from './posts.gateway';
import { UserSocketMapService } from './user-map-service';
import { AuthModule } from '../auth/auth.module';
import { PostsRepository } from './posts.repository';

@Module({
  imports: [AuthModule],
  controllers: [PostsController],
  providers: [
    PostsService,
    PrismaService,
    PostsGateway,
    UserSocketMapService,
    PostsRepository,
  ],
  exports: [PostsService],
})
export class PostsModule {}
