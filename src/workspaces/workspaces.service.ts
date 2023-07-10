import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/user.entity';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private WorkspaceRepository: Repository<Workspace>,
  ) {}

  async create(createWorkspaceDto: CreateWorkspaceDto, req: any) {
    const creater = new Users();
    creater.id = req.user.id;
    createWorkspaceDto.members = [creater];
    return this.WorkspaceRepository.save(createWorkspaceDto);
  }

  findAll() {
    const page = 1; // The desired page number
    const pageSize = 10; // The number of records per page
    const skip = (page - 1) * pageSize; // Calculate the number of records to skip

    return this.WorkspaceRepository.find({
      relations: { members: true, projets: true },
      skip: skip,
      take: pageSize,
    });
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
