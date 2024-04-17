import { Module } from '@nestjs/common';
import { BoardController } from 'apps/front-api/src/board/board.controller';

@Module({
  controllers: [BoardController],
})
export class ControllerModule {}
