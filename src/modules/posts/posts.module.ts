import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';
import { PostsGateway } from './posts.gateway';
import { UserSocketMapService } from './user-map-service';
import { AuthModule } from '../auth/auth.module';

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
    UserSocketMapService,
  ],
  exports: [PostsService, PostsRepository],
})
export class PostsModule {}
