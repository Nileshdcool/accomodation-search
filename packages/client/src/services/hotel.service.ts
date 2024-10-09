import { API_URL } from "../constants/config";
import { Hotel } from "../types/Hotel";
import axios from 'axios';
import { forkJoin } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { from } from 'rxjs';

export const fetchAndFilterResults = (value: string) => {
  const lowerValue = value.toLowerCase();

  const hotels$ = from(axios.get<Hotel[]>(`${API_URL}/hotels`));
  const cities$ = from(axios.get<{ name: string }[]>(`${API_URL}/cities`));
  const countries$ = from(axios.get<{ country: string }[]>(`${API_URL}/countries`));

  return forkJoin([hotels$, cities$, countries$]).pipe(
    debounceTime(500),
    map(([hotelsResponse, citiesResponse, countriesResponse]) => {
      const hotels = hotelsResponse.data.filter(({ chain_name, hotel_name, city, country }) =>
        [chain_name, hotel_name, city, country].some(field =>
          field.toLowerCase().includes(lowerValue)
        )
      );

      const cities = citiesResponse.data.filter(({ name }) =>
        name.toLowerCase().includes(lowerValue)
      );

      const countries = countriesResponse.data.filter(({ country }) =>
        country.toLowerCase().includes(lowerValue)
      );

      return {
        hotels,
        cities,
        countries
      };
    })
  );
};