import { MigrationInterface, QueryRunner } from 'typeorm';

export class TestGen1713876495202 implements MigrationInterface {
  name = 'TestGen1713876495202';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`lastname\` \`surname\` varchar(255) NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`surname\` \`lastname\` varchar(255) NOT NULL`
    );
  }
}
