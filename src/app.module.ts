import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { BooksModule } from './books/books.module';
import { Users } from './users/entities/user.entity';
import { Books } from './books/entities/book.entity';
import { AuthModule } from './auth/auth.module';
import { User_groups } from './users/entities/user_group.entity';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { PostsModule } from './posts/posts.module';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Users, Books, User_groups, Task],
      synchronize: true,
      ssl: false,
    }),
    BooksModule,
    AuthModule,
    TasksModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
