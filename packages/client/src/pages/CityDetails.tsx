import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

interface City {
    id: string;
    name: string;
    population: number;
    description: string;
}

export default function CityDetails() {
    const { id } = useParams<{ id: string }>();
    const [city, setCity] = useState<City | null>(null);
    const { cities } = useAppContext();

    useEffect(() => {
        const city = cities.find((c) => c.id === id);
        setCity(city || null);
    }, [id, cities]);

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <div className="hotel-details" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh', padding: '20px' }}>
            <div className="hotel-card" style={{ textAlign: 'center', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome to the {city.name}</h1>
            </div>
        </div>
    );
}