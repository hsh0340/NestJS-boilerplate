import { BoardService } from 'apps/domain/board/service/board.service';
import { Module } from '@nestjs/common';
import { BoardRepository } from 'apps/domain/board/repository/board.repository';
import { UserService } from 'apps/domain/user/user.service';
import { UserRepository } from 'apps/domain/user/user.repository';

const services = [BoardService, UserService];

const repositories = [BoardRepository, UserRepository];

@Module({
  providers: [...services, ...repositories],
  exports: [...services, ...repositories],
})
export class DomainModule {}
