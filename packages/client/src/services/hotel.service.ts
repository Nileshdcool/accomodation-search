import { API_URL } from "../constants/config";
import { Hotel } from "../types/Hotel";
import axios from 'axios';

export const fetchAndFilterHotels = async (value: string) => {
  const { data: hotels } = await axios.get<Hotel[]>(`${API_URL}/hotels`);
  const lowerValue = value.toLowerCase();
  return hotels.filter(({ chain_name, hotel_name, city, country }) =>
    [chain_name, hotel_name, city, country].some(field =>
      field.toLowerCase().includes(lowerValue)
    )
  );
}
