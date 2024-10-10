import React from 'react';
import HotelItem from './HotelItem';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Section: React.FC<{ title: string; items: any[]; 
  renderItem: (item: any, index: number) => React.ReactNode }> = ({ title, items, renderItem }) => (
  <>
    <h2>{title}</h2>
    {items.length ? items.map(renderItem) : <p>No {title.toLowerCase()} matched</p>}
  </>
);

export const HotelList: React.FC = () => {
  const { hotels, cities, countries } = useAppContext();
  return (
    <div className="search-dropdown-menu dropdown-menu w-100 show p-2 mt-2">
      <Section title="Hotels" items={hotels || []} renderItem={(hotel, index) => <HotelItem key={index} hotel={hotel} />} />
      <Section title="Countries" items={countries || []} renderItem={(country, index) => (
        <Link key={index} to={`/countries/${country._id}`} className="dropdown-item">
          {country.country}
        </Link>
      )} />
      <Section title="Cities" items={cities || []} renderItem={(city, index) => (
        <Link key={index} to={`/cities/${city._id}`} className="dropdown-item">
          {city.name}
        </Link>
      )} />
    </div>
  );
}

export default HotelList;
