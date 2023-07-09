import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { User_groups } from './users/entities/user_group.entity';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { PostsModule } from './posts/posts.module';
import { Task } from './tasks/entities/task.entity';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { Post } from './posts/entities/post.entity';
import { ProjectsModule } from './projects/projects.module';
import { Workspace } from './workspaces/entities/workspace.entity';
import { Project } from './projects/entities/project.entity';

@Module({
  imports: [
    UsersModule,
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
      entities: [Users, User_groups, Task, Post, Workspace, Project],
      synchronize: true,
      ssl: true,
      cache: true
    }),
    AuthModule,
    TasksModule,
    PostsModule,
    WorkspacesModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
