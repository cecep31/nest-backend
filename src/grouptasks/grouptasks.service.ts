import { Injectable } from '@nestjs/common';
import { CreateGrouptaskDto } from './dto/create-grouptask.dto';
import { UpdateGrouptaskDto } from './dto/update-grouptask.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grouptask } from './entities/grouptask.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GrouptasksService {
  constructor(
    @InjectRepository(Grouptask)
    private grouptaskRepository: Repository<Grouptask>,
  ) {}

  create(createGrouptaskDto: CreateGrouptaskDto) {
    return this.grouptaskRepository.save(createGrouptaskDto);
  }

  findAll() {
    return this.grouptaskRepository.find();
  }

  findOne(id: string) {
    return this.grouptaskRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateGrouptaskDto: UpdateGrouptaskDto) {
    updateGrouptaskDto.id = id;
    return this.grouptaskRepository.save(updateGrouptaskDto);
  }

  remove(id: string) {
    return this.grouptaskRepository.softDelete(id);
  }
}
