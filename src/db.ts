/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MongoClient, MongoClientOptions } from 'mongodb';

const databaseName = process.env.NODE_ENV === 'test'
  ? 'TEST_DB'
  : 'PROD_DB';

const databaseUri = `mongodb://localhost:27017/${ databaseName }`;

const mongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions;

export const getUserByUsername = async (username: string) => {
  const client = await MongoClient.connect(databaseUri, mongoClientOptions);

  const db = client.db(databaseName);

  const result = await db.collection('users')
    .findOne({ username });

  client.close();

  return result;
};