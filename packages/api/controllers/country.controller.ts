import { Request, Response } from 'express';
import { fetchCountries } from 'services/country.service';
import { sendResponse } from 'utils/response';


export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await fetchCountries();
    sendResponse(res, 200, countries);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch countries' });
  }
};