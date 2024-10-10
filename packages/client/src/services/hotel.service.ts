import { API_URL } from "../constants/config";
import { Hotel } from "../types/Hotel";
import { forkJoin, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { axiosInstance } from "../utils/axios-interceptor.service";

export const fetchAndFilterResults = (value: string) => {
  const lowerValue = value.toLowerCase();

  return of(lowerValue).pipe(
    switchMap(() => {
      const hotels$ = from(axiosInstance.get<Hotel[]>(`${API_URL}/hotels`));
      const cities$ = from(axiosInstance.get<{ name: string }[]>(`${API_URL}/cities`));
      const countries$ = from(axiosInstance.get<{ country: string }[]>(`${API_URL}/countries`));

      return forkJoin([hotels$, cities$, countries$]).pipe(
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
    })
  );
};