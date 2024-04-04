import { BoardService } from 'apps/domain/board/board.service';
import { Module } from '@nestjs/common';

const services = [BoardService];

@Module({
  providers: [...services],
  exports: [...services],
})
export class DomainModule {}
