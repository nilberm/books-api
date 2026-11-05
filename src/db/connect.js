import { MongoClient } from 'mongodb';

let db = null;

const connectToDb = async () => {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB_NAME;

  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable.');
  }

  if (!dbName) {
    throw new Error('Missing MONGODB_DB_NAME environment variable.');
  }

  const client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);
  return db;
};

const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDb first.');
  }
  return db;
};

export { connectToDb, getDb };
