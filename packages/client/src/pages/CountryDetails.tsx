import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

interface Country {
    id: string;
    country: string;
    countryisocode: string;
    description: string;
}

export default function CountryDetails() {
    const { id } = useParams<{ id: string }>();
    const [country, setCountry] = useState<Country | null>(null);
    const { countries } = useAppContext();

    useEffect(() => {
        const city = countries.find((c) => c.id === id);
        setCountry(city || null);
    }, [id, countries]);

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div className="hotel-details" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh', padding: '20px' }}>
            <div className="hotel-card" style={{ textAlign: 'center', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome to the {country.country}</h1>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>countryisocode {country.countryisocode}</h1>
            </div>
        </div>
    );
}