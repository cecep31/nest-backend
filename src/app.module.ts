import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { PostsModule } from './posts/posts.module';
import { Task } from './tasks/entities/task.entity';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { Post } from './posts/entities/post.entity';
import { ProjectsModule } from './projects/projects.module';
import { Workspace } from './workspaces/entities/workspace.entity';
import { Project } from './projects/entities/project.entity';
import { GrouptasksModule } from './grouptasks/grouptasks.module';
import { Grouptask } from './grouptasks/entities/grouptask.entity';
import { ThrottlerModule } from '@nestjs/throttler';
import { NotificationsModule } from './notifications/notifications.module';
import { ChatsModule } from './chats/chats.module';
import { Comment_post } from './posts/entities/commentpost.entity';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Users, Task, Post, Workspace, Project, Grouptask, Comment_post],
      synchronize: true,
      ssl: false,
      cache: true,
      // logging: true,
    }),
    UsersModule,
    AuthModule,
    TasksModule,
    PostsModule,
    WorkspacesModule,
    ProjectsModule,
    GrouptasksModule,
    NotificationsModule,
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
