import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV;
const host = env === 'test' ? process.env.TEST_DB_HOST : process.env.DB_HOST;
const port = env === 'test' ? process.env.TEST_DB_PORT : process.env.DB_PORT;
const username =
  env === 'test' ? process.env.TEST_DB_USERNAME : process.env.DB_USERNAME;
const password =
  env === 'test' ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD;
const database =
  env === 'test' ? process.env.TEST_DB_DATABASE : process.env.DB_DATABASE;

module.exports = {
  type: 'mysql' /* 사용할 데이터베이스 종류 */,
  host: host /* 데이터베이스 서버의 호스트 이름 또는 IP 주소 */,
  port: Number(port) /* 데이터베이스 서버의 포트 번호 */,
  username /* 데이터베이스에 접속할 때 사용자 이름 */,
  password /* 데이터베이스에 접속할 때 비밀번호 */,
  database /* 사용할 데이터베이스의 이름 */,
  entities: [
    'apps/**/*.entity.ts',
  ] /* 데이터베이스의 테이블과 매핑될 엔티티 클래스 파일의 위치 */,
  migrations: ['db/migrations/*.ts'] /* 마이그레이션 파일의 위치 */,
  cli: {
    /* CLI 명령 설정 */
    migrationsDir: 'db/migrations' /* 마이그레이션 디렉토리 위치 */,
  },
  seeds: ['apps/**/*.seed.ts'] /* 시드 파일 위치 */,
  factories: ['apps/**/*.factory.ts'] /* 팩토리 파일 위치 */,
  timezone: 'Z' /* 데이터베이스에서 사용할 시간대 */,
};
