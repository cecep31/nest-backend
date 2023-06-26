import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private WorkspaceRepository: Repository<Workspace>,
    private UserService: UsersService,
  ) {}

  async create(createWorkspaceDto: CreateWorkspaceDto) {
    const creater = await this.UserService.findOne(
      '5a39ef67-3473-4cf7-83b8-27eb722b60d1',
    );
    createWorkspaceDto.members = [creater];
    return this.WorkspaceRepository.save(createWorkspaceDto);
  }

  findAll() {
    return this.WorkspaceRepository.find({ relations: { members: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} workspace`;
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} workspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }
}
