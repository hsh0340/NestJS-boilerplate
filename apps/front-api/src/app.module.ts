import { Module } from '@nestjs/common';
import { ControllerModule } from 'apps/front-api/src/controller.module';
import { DomainModule } from 'apps/domain/domain.module';

@Module({
  imports: [ControllerModule, DomainModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
