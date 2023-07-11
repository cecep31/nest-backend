import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    updateTaskDto.id = id;
    return this.taskRepository.save(updateTaskDto);
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
