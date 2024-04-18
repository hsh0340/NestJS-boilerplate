import { Module } from '@nestjs/common';
import { ControllerModule } from './controller.module';
import { DomainModule } from 'apps/domain/domain.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ControllerModule,
    DomainModule,
  ],
  providers: [],
})
export class AppModule {}
