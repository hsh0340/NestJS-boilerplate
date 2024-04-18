import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ControllerModule } from 'apps/front-api/src/controller.module';
import { DomainModule } from 'apps/domain/domain.module';
import { LoggerMiddleware } from 'apps/infrastructure/middlewares/logger.middleware';
import { InfrastructureModule } from 'apps/infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule.forRoot(), ControllerModule, DomainModule],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
