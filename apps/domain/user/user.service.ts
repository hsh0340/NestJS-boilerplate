import { Injectable } from '@nestjs/common';
import { UserRepository } from 'apps/domain/user/user.repository';
import { CreateUserDto } from 'apps/domain/user/dto/create-user.dto';
import { UserDto } from 'apps/domain/user/dto/user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async createUser(dto: CreateUserDto): Promise<UserDto> {
    const newUser = await this.userRepository.createUser(dto);
    return plainToInstance(UserDto, newUser);
  }
}
