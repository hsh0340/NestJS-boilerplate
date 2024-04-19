import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBoardEntity1713529692620 implements MigrationInterface {
    name = 'CreateBoardEntity1713529692620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`board\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`board\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`board\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`board\` ADD \`content\` text NOT NULL COMMENT '게시글 내용'`);
        await queryRunner.query(`ALTER TABLE \`board\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`board\` ADD \`title\` varchar(1000) NOT NULL COMMENT '게시글 제목'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`board\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`board\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`board\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`board\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`board\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`board\` ADD \`description\` varchar(255) NOT NULL`);
    }

}
