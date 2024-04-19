import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1713557761905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" INSERT COLUMN "gender" VARCHAR(255);`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `ALTER TABLE "user" DELETE COLUMN "gender";`
      );
  }
}
