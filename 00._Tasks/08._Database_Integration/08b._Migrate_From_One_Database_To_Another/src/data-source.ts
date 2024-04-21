import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Post } from './entity/post.js';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'si_migration',
  synchronize: true,
  entities: [Post],
  subscribers: [],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});
