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
    return this.WorkspaceRepository.find({
      relations: { members: true, projets: true },
    });
  }

  findMyWorkspaces(id: string) {
    return this.WorkspaceRepository.find({
      where: { members: { id } },
      relations: { members: true },
    });
  }

  findById(id: string) {
    return this.WorkspaceRepository.findOne({
      where: {
        id: id,
      },
      relations: { members: true, projets: true },
    });
  }

  update(id: string, updateWorkspaceDto: UpdateWorkspaceDto) {
    updateWorkspaceDto.id = id;
    return this.WorkspaceRepository.save(updateWorkspaceDto);
  }

  remove(id: string) {
    return this.WorkspaceRepository.softDelete({ id: id });
  }
}
