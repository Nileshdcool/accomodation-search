import { MongoClient } from "mongodb";

let mongoClient: MongoClient;

export const connectToDatabase = async (url: string) => {
  if (!mongoClient) {
    mongoClient = new MongoClient(url);
    await mongoClient.connect();
    console.log('Successfully connected to MongoDB!');
  }
  return mongoClient;
};

export const getDatabase = () => {
  if (!mongoClient) throw new Error('Database connection is not established');
  return mongoClient.db();
};