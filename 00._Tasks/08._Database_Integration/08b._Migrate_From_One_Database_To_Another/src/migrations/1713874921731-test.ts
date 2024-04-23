import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Test1713874921731 implements MigrationInterface {
  name = 'Test1713874921731';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const itemsTable = new Table({
      name: 'items',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'item_name',
          type: 'varchar',
          length: '255',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          length: '255',
          isNullable: false,
        },
        {
            name: 'price',
            type: 'double',
            isNullable: false,
          },
      ],
    });
    await queryRunner.createTable(itemsTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('items');
  }
}
