import { DynamicModule, Global, Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  addTransactionalDataSource,
  initializeTransactionalContext,
} from 'typeorm-transactional';
import { typeormConfig } from 'apps/infrastructure/typeorm.config';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { Board } from 'apps/domain/board/board.entity';

const entities = [Board];

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig,
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return addTransactionalDataSource(new DataSource(options));
      },
    }),

    TypeOrmModule.forFeature(entities),
  ],
  providers: [Logger],
  exports: [TypeOrmModule, Logger],
})
export class InfrastructureModule {
  public static forRoot(): DynamicModule {
    initializeTransactionalContext();

    return {
      module: InfrastructureModule,
    };
  }
}
