/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MongoClient, MongoClientOptions } from 'mongodb';

const databaseName = 'TEST_DB';

const databaseUri = `mongodb://localhost:27017/${ databaseName }`;

const mongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongoClientOptions;

export const setDatabaseData = async (collectionName: string, data: any) => {
  const client = await MongoClient.connect(databaseUri, mongoClientOptions);

  const db = client.db(databaseName);

  await db.collection(collectionName).insertMany(data);
  client.close();
};

export const getDatabaseData = async (collectionName: string) => {
  const client = await MongoClient.connect(databaseUri, mongoClientOptions);

  const db = client.db(databaseName);

  const result = await db.collection(collectionName)
    .find()
    .toArray();
  
  client.close();

  return result;
};

export const resetDatabase = async () => {
  const client = await MongoClient.connect(databaseUri, mongoClientOptions);

  const db = client.db(databaseName);

  await db.dropDatabase();

  client.close();
};