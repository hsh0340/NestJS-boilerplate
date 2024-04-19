import { BoardService } from 'apps/domain/board/board.service';
import { Module } from '@nestjs/common';
import { BoardRepository } from 'apps/domain/board/board.repository';

const services = [BoardService];

const repositories = [BoardRepository];

@Module({
  providers: [...services, ...repositories],
  exports: [...services, ...repositories],
})
export class DomainModule {}
