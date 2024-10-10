import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { getCities } from "controllers/city.controller";
import { getCountries } from "controllers/country.controller";
import { getHotels } from "controllers/hotel.controller";
import { connectToDatabase } from "db";
import { errorHandler } from "middlewares/errorHandler";

dotenv.config();

if (process.env.NODE_ENV !== 'production' && !process.env.DATABASE_URL) {
  await import('./db/startAndSeedMemoryDB');
}

const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase(DATABASE_URL).then(() => {
  app.get('/hotels', getHotels);
  app.get('/cities', getCities);
  app.get('/countries', getCountries);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`API Server Started at ${PORT}`);
  });
}).catch(error => {
  console.error('Failed to connect to the database', error);
});