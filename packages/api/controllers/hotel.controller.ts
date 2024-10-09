import { Request, Response } from 'express';
import { fetchHotels } from 'services/hotel.service';


export const getHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await fetchHotels();
    res.send(hotels);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch hotels' });
  }
};