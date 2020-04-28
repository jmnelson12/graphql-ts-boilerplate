import { createConnection } from 'typeorm';

export const testConn = (drop = false) => {
  return createConnection({
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'graphql-typescript-boilerplate-test',
    synchronize: drop,
    dropSchema: drop,
    entities: [`${__dirname}/../entity/*.*`],
  });
};
