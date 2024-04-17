import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  addTransactionalDataSource,
  initializeTransactionalContext,
} from 'typeorm-transactional';
import { typeormConfig } from 'apps/infrastructure/typeorm.config';
import { DataSource } from 'typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig,
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return addTransactionalDataSource(new DataSource(options));
      },
    }),

    TypeOrmModule.forFeature(),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class InfrastructureModule {
  public static forRoot(): DynamicModule {
    initializeTransactionalContext();

    return {
      module: InfrastructureModule,
    };
  }
}
