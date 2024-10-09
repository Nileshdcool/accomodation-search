import { getDatabase } from '../db';

export const fetchCountries = async () => {
  const db = getDatabase();
  const collection = db.collection('countries');
  return await collection.find().toArray();
};