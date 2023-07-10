import { Module } from '@nestjs/common';
import { GrouptasksService } from './grouptasks.service';
import { GrouptasksController } from './grouptasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grouptask } from './entities/grouptask.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grouptask])],
  controllers: [GrouptasksController],
  providers: [GrouptasksService]
})
export class GrouptasksModule {}
