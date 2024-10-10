import { Request, Response } from 'express';
import { fetchHotels } from 'services/hotel.service';
import { sendResponse } from 'utils/response';


export const getHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await fetchHotels();
    sendResponse(res, 200, hotels);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch hotels' });
  }
};