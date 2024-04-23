import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ddl1713860107604 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      // Create schema
      //   await queryRunner.createSchema('si_migration', true);

      // Define tables metadata

      const usersTable = new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'firstname',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'lastname',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
        ],
      });

      const postsTable = new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'text',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'fk_user_id',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['fk_user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
          },
        ],
      });

      // Create tables
      await queryRunner.createTable(usersTable);
      await queryRunner.createTable(postsTable);
    } catch (error) {
      console.error('Migration failed:', error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
    await queryRunner.dropTable('users');
  }
}
