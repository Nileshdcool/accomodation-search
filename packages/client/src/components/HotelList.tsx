import React from 'react';
import HotelItem from './HotelItem';
import { Hotel } from '../types/Hotel';

interface HotelListProps {
  results: {
    hotels?: Hotel[];
    countries?: { country: string }[];
    cities?: { name: string }[];
  };
}

const Section: React.FC<{ title: string; items: any[]; renderItem: (item: any, index: number) => React.ReactNode }> = ({ title, items, renderItem }) => (
  <>
    <h2>{title}</h2>
    {items.length ? items.map(renderItem) : <p>No {title.toLowerCase()} matched</p>}
  </>
);

export const HotelList: React.FC<HotelListProps> = ({ results }) => (
  <div className="search-dropdown-menu dropdown-menu w-100 show p-2 mt-2">
    <Section title="Hotels" items={results.hotels || []} renderItem={(hotel, index) => <HotelItem key={index} hotel={hotel} />} />
    <Section title="Countries" items={results.countries || []} renderItem={(country, index) => <p key={index}>{country.country}</p>} />
    <Section title="Cities" items={results.cities || []} renderItem={(city, index) => <p key={index}>{city.name}</p>} />
  </div>
);

export default HotelList;
