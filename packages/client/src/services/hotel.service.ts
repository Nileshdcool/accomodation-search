import { of, from, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Hotel } from '../types/Hotel';
import { axiosInstance } from '../utils/axios-interceptor.service';
import { API_URL } from '../constants/config';

export const fetchAndFilterResults = (value: string) => {
  const lowerValue = value.toLowerCase();

  return of(lowerValue).pipe(
    switchMap(() => {
      const hotels$ = from(axiosInstance.get<{ data: Hotel[] }>(`${API_URL}/hotels`));
      const cities$ = from(axiosInstance.get<{ data: { name: string }[] }>(`${API_URL}/cities`));
      const countries$ = from(axiosInstance.get<{ data: { country: string }[] }>(`${API_URL}/countries`));

      return forkJoin([hotels$, cities$, countries$]).pipe(
        map(([hotelsResponse, citiesResponse, countriesResponse]) => {
          const hotels = hotelsResponse.data.data.filter(({ chain_name, hotel_name, city, country }) =>
            [chain_name, hotel_name, city, country].some(field =>
              field.toLowerCase().includes(lowerValue)
            )
          );

          const cities = citiesResponse.data.data.filter(({ name }) =>
            name.toLowerCase().includes(lowerValue)
          );

          const countries = countriesResponse.data.data.filter(({ country }) =>
            country.toLowerCase().includes(lowerValue)
          );

          return {
            hotels,
            cities,
            countries
          };
        })
      );
    })
  );
};