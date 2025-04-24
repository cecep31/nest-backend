import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { PagesModule } from './modules/note/pages/pages.module';
import { WorkspacesModule } from './modules/note/workspaces/workspaces.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    PagesModule,
    WorkspacesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
