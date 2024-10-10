import { Request, Response } from 'express';
import { fetchCities } from 'services/city.service';
import { sendResponse } from 'utils/response';

export const getCities = async (req: Request, res: Response) => {
  try {
    const cities = await fetchCities();
    sendResponse(res, 200, cities);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch cities' });
  }
};