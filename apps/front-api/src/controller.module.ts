import { Module } from '@nestjs/common';
import { BoardController } from 'apps/front-api/src/board/board.controller';
import { DomainModule } from 'apps/domain/domain.module';

@Module({
  imports: [DomainModule],
  controllers: [BoardController],
})
export class ControllerModule {}
