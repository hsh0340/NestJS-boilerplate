import { Module } from '@nestjs/common';
import { BoardController } from 'apps/front-api/src/board/board.controller';
import { DomainModule } from 'apps/domain/domain.module';
import { UserController } from 'apps/front-api/src/user/user.controller';

@Module({
  imports: [DomainModule],
  controllers: [BoardController, UserController],
})
export class ControllerModule {}
