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

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'pilput',
      password: 'pilput31',
      database: 'nestbackend',
      entities: [Users, Books, User_groups],
      synchronize: true,
      ssl: false,
    }),
    BooksModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
