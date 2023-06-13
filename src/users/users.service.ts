import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm/dist/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Users } from "./entities/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>
  ) {}

  async hashPassword(password:string) {
    return await bcrypt.hash(password, 14);
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashPassword(createUserDto.password);
    return this.usersRepository.save(createUserDto);
  }

  update(id: string, updateUserDTO: UpdateUserDto) {
    updateUserDTO.id = id;
    return this.usersRepository.save(updateUserDTO);
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findByEmail(email: string): Promise<Users> {
    return this.usersRepository.findOneBy({ email: email });
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
