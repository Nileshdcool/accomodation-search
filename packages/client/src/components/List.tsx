import React from 'react';
import { useAppContext } from '../context/AppContext';
import {CityListItem, CountryListItem, HotelListItem} from './Item';

const Section: React.FC<{ title: string; items: any[]; renderItem: (item: any, index: number) => React.ReactNode }> = ({ title, items, renderItem }) => (
  <div className="section">
    <h2 className="section-title">{title}</h2>
    {items.length ? (
      <ul className="section-list">
        {items.map(renderItem)}
      </ul>
    ) : (
      <p className="no-matches">No {title.toLowerCase()} matched</p>
    )}
  </div>
);

export const List: React.FC = () => {
  const { hotels, cities, countries } = useAppContext();
  return (
    <div className="search-dropdown-menu dropdown-menu w-100 show p-2 mt-2">
      <Section title="Hotels" items={hotels || []} renderItem={(hotel, index) => <HotelListItem key={index} hotel={hotel} />} />
      <Section title="Countries" items={countries || []} renderItem={(country, index) => <CountryListItem key={index} country={country} />} />
      <Section title="Cities" items={cities || []} renderItem={(city, index) => <CityListItem key={index} city={city} />} />
    </div>
  );
}

export default List;