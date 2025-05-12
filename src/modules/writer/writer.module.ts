import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { WriterController } from './writer.controller';
import { WriterService } from './writer.service';
import { UserRepository } from '../users/users.repository';
@Module({
    imports: [UsersModule],
    controllers: [WriterController],
    providers: [WriterService, UserRepository],
})
export class WriterModule {}
