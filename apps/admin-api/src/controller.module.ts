import { Module } from '@nestjs/common';
import { BoardController } from './board/board.controller';

@Module({
  controllers: [BoardController],
})
export class ControllerModule {}
