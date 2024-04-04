import { Module } from '@nestjs/common';
import { ControllerModule } from './controller.module';
import { DomainModule } from 'apps/domain/domain.module';

@Module({
  imports: [ControllerModule, DomainModule],
  providers: [],
})
export class AppModule {}
