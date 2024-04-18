import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ControllerModule } from './controller.module';
import { DomainModule } from 'apps/domain/domain.module';
import { InfrastructureModule } from 'apps/infrastructure/infrastructure.module';
import { LoggerMiddleware } from 'apps/infrastructure/middlewares/logger.middleware';

@Module({
  imports: [InfrastructureModule.forRoot(), ControllerModule, DomainModule],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
