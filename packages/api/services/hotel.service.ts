import { getDatabase } from "db";


export const fetchHotels = async () => {
  const db = getDatabase();
  const collection = db.collection('hotels');
  return await collection.find().toArray();
};