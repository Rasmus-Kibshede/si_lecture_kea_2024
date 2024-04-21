import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1713733245764 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE post CHANGE COLUMN title name VARCHAR(255)`,
        )
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE post CHANGE COLUMN name title VARCHAR(255)`,
        )
    }

}
