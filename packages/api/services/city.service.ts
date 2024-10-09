import { getDatabase } from "db";


export const fetchCities = async () => {
  const db = getDatabase();
  const collection = db.collection('cities');
  return await collection.find().toArray();
};