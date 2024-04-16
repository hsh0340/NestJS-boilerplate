import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import {
  addTransactionalDataSource,
  initializeTransactionalContext,
} from 'typeorm-transactional';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const config =
          process.env.NODE_ENV === 'test'
            ? {
                host: process.env.TEST_DB_HOST,
                port: Number(process.env.TEST_DB_PORT),
                username: process.env.TEST_DB_USERNAME,
                password: process.env.TEST_DB_PASSWORD,
                database: process.env.TEST_DB_DATABASE,
                // 테스트코드 실행 중 clearDB 하는 과정에서
                // 2개 이상의 커넥션이 생성되는 것을 막기 위해
                // 커넥션 제한
                extra: {
                  connectionLimit: 1,
                },
              }
            : {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
              };

        return {
          type: 'mysql',
          ...config,
          extra: {
            ...config.extra,
            decimalNumbers: true,
          },
          autoLoadEntities: true,
          synchronize:
            process.env.SYNC === 'true' && process.env.NODE_ENV !== 'test',
          dropSchema: false,
          timezone: 'Z',
        };
      },
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
