import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users/users.repository';

@Injectable()
export class WriterService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}
  


  async getWriterByUserName(userName: string) {
    const user = await this.userRepository.findByUsername(userName);
    
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

}
