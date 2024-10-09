import { Request, Response } from 'express';
import { fetchCountries } from 'services/country.service';


export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await fetchCountries();
    res.send(countries);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch countries' });
  }
};