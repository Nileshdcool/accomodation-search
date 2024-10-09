import React from 'react';
import { Hotel } from '../types/Hotel';

interface HotelItemProps {
  hotel: Hotel;
}

export const HotelItem: React.FC<HotelItemProps> = ({ hotel }) => (
  <li>
    <a href={`/hotels/${hotel._id}`} className="dropdown-item">
      <i className="fa fa-building mr-2"></i>
      {hotel.hotel_name}
    </a>
    <hr className="divider" />
  </li>
);

export default HotelItem;