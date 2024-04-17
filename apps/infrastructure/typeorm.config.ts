import { ConfigService } from '@nestjs/config';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function typeormConfig(configService: ConfigService): TypeOrmModuleOptions {
  const config =
    configService.get('NODE_ENV') === 'test'
      ? {
          host: configService.get('TEST_DB_HOST'),
          port: configService.get<number>('process.env.TEST_DB_PORT'),
          username: configService.get('TEST_DB_USERNAME'),
          password: configService.get('TEST_DB_PASSWORD'),
          database: configService.get('TEST_DB_DATABASE'),
          // 테스트코드 실행 중 clearDB 하는 과정에서
          // 2개 이상의 커넥션이 생성되는 것을 막기 위해
          // 커넥션 제한
          extra: {
            connectionLimit: 1,
          },
        }
      : {
          host: configService.get('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
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
      configService.get('SYNC') === 'true' &&
      configService.get('NODE_ENV') !== 'test',
    dropSchema: false,
    timezone: 'Z',
  };
}

export { typeormConfig };
