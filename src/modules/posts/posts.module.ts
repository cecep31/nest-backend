import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';
import { PostsGateway } from './posts.gateway';
import { PrismaService } from '../../prisma.service';
import { UserSocketMapService } from './user-map-service';
import { AuthModule } from '../auth/auth.module';

// Uncomment the following line if you want this module to be global
// import { Global } from '@nestjs/common';

// @Global() // Uncomment to make the module global
@Module({
  // Importing required modules
  imports: [AuthModule],
  // Defining controllers
  controllers: [PostsController],
  // Defining providers
  providers: [
    PostsService,
    PostsRepository,
    PostsGateway,
    PrismaService,
    UserSocketMapService,
  ],
  // Exporting service and repository to allow reuse in other modules
  exports: [PostsService, PostsRepository],
})
export class PostsModule {}
