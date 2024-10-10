import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from '../types/Hotel';

interface HotelItemProps {
  hotel: Hotel;
}

export const HotelListItem: React.FC<HotelItemProps> = ({ hotel }) => (
  <li className="hotel-item">
    <Link to={`/hotels/${hotel._id}`} className="dropdown-item">
      <div className="hotel-item-content">
        <i className="fa fa-building mr-2"></i>
        <div>
          <h5 className="hotel-name">{hotel.hotel_name}</h5>
          <p className="hotel-location">{hotel.city}, {hotel.country}</p>
        </div>
      </div>
    </Link>
    <hr className="divider" />
  </li>
);


export const CountryListItem: React.FC<any> = ({ country }) => (
  <li className="hotel-item">
    <Link to={`/countries/${country?._id}`} className="dropdown-item">
      <div className="hotel-item-content">
        <i className="fa fa-building mr-2"></i>
        <div>
          <h5 className="hotel-name">{country?.country}</h5>
        </div>
      </div>
    </Link>
    <hr className="divider" />
  </li>
);


export const CityListItem: React.FC<any> = ({ city }) => (
  <li className="hotel-item">
    <Link to={`/cities/${city._id}`} className="dropdown-item">
      <div className="hotel-item-content">
        <i className="fa fa-building mr-2"></i>
        <div>
          <h5 className="hotel-name">{city.name}</h5>
        </div>
      </div>
    </Link>
    <hr className="divider" />
  </li>
);
