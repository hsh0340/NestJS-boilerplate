import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBoardEntity1713752298818 implements MigrationInterface {
  name = 'CreateBoardEntity1713752298818';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`board\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`title\` varchar(1000) NOT NULL COMMENT '게시글 제목', \`content\` text NOT NULL COMMENT '게시글 내용', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`board\``);
  }
}
