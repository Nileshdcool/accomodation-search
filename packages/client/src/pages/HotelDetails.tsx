import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Hotel } from '../types/Hotel';

export default function HotelDetails() {
    const { id } = useParams<{ id: string }>();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const { hotels } = useAppContext();

    useEffect(() => {
        const city = hotels.find((c) => c._id === id);
        setHotel(city || null);
    }, [id, hotels]);

    if (!hotel) {
        return <div>Loading...</div>;
    }

    return (
        <div className="hotel-details" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh', padding: '20px' }}>
            <div className="hotel-card" style={{ textAlign: 'center', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome to the {hotel.hotel_name}</h1>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>City: {hotel.city}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>Country: {hotel.country}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>Chain Name: {hotel.chain_name}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>Address Line 1: {hotel.addressline1}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>Address Line 2: {hotel.addressline2}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>Zip Code: {hotel.zipcode}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>State: {hotel.state}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>Star Rating: {hotel.star_rating}</h2>
                <h2 style={{ color: '#555', marginBottom: '10px' }}>Country ISO Code: {hotel.countryisocode}</h2>
            </div>
        </div>
    );
}