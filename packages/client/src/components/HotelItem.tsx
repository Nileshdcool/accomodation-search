import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from '../types/Hotel';

interface HotelItemProps {
  hotel: Hotel;
}

export const HotelItem: React.FC<HotelItemProps> = ({ hotel }) => (
  <li>
    <Link to={`/hotels/${hotel._id}`} className="dropdown-item">
      <i className="fa fa-building mr-2"></i>
      {hotel.hotel_name}
    </Link>
    <hr className="divider" />
  </li>
);

export default HotelItem;