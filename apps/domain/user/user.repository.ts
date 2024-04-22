import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'apps/domain/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'apps/domain/user/dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async createUser(dto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = dto.email;
    user.password = dto.password;
    user.role = dto.role;
    user.isPrivacyPolicyAgreed = dto.isPrivacyPolicyAgreed;
    user.isMarketingAgreed = dto.isMarketingAgreed;

    return await this.userRepository.save(user);
  }
}
