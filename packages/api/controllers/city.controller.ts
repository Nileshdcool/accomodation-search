import { Request, Response } from 'express';
import { fetchCities } from 'services/city.service';

export const getCities = async (req: Request, res: Response) => {
  try {
    const cities = await fetchCities();
    res.send(cities);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch cities' });
  }
};