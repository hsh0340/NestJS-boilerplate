import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserEntity1713752521830 implements MigrationInterface {
  name = 'CreateUserEntity1713752521830';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`email\` varchar(255) NOT NULL COMMENT '이메일', \`password\` varchar(255) NOT NULL COMMENT '비밀번호 ', \`role\` enum ('ADMIN', 'USER') NOT NULL COMMENT '유저ROLE', \`isPrivacyPolicyAgreed\` tinyint NOT NULL COMMENT '개인정보처리동의', \`isMarketingAgreed\` tinyint NOT NULL COMMENT '마케팅동의', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
