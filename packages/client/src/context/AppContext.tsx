// packages/client/src/context/AppContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { Hotel } from '../types/Hotel';

interface AppContextProps {
  results: any;
  setResults: (results: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  hotels: Hotel[];
  cities: any[];
  countries: any[];
  setHotels: (hotels: Hotel[]) => void;
  setCities: (cities: any[]) => void;
  setCountries: (countries: any[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ results, setResults, 
    loading, setLoading, 
    hotels, cities, countries,
    setHotels, setCities, setCountries }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};