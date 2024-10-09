import React from 'react';
import { Hotel } from '../types/Hotel';
import HotelItem from './HotelItem';


interface HotelListProps {
  hotels: Hotel[];
}

export const HotelList: React.FC<HotelListProps> = ({ hotels }) => (
  <div className="search-dropdown-menu dropdown-menu w-100 show p-2 mt-2">
    <h2>Hotels</h2>
    {hotels.length ? (
      hotels.map((hotel, index) => (
        <HotelItem key={index} hotel={hotel} />
      ))
    ) : (
      <p>No Hotels matched</p>
    )}
    <h2>Countries</h2>
    <p>No countries matched</p>
    <h2>Cities</h2>
    <p>No cities matched</p>
  </div>
);

export default HotelList;