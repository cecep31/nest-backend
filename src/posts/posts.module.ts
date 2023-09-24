import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma.service';
import { PostsGateway } from './posts.gateway';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Post } from './entities/post.entity';
// import { PostsGateway } from './posts.gateway';
// import { Comment_post } from './entities/commentpost.entity';
@Module({
  // imports: [PostsService],
  controllers: [PostsController],
  providers: [PostsService,PrismaService,PostsGateway],
})
export class PostsModule {}
