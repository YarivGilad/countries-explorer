import { useState } from 'react';
import countriesData from './data/countries.json';
import type { Country } from './types';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

const countries: Country[] = countriesData;

export default function App() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const selectedCountry = countries.find((country) => country.code === selectedCode);

  return (
    <main className="app">
      <h1>Countries Explorer</h1>
      <div className="layout">
        <CountryList countries={countries} onSelect={setSelectedCode} />
        <CountryDetail country={selectedCountry} />
      </div>
    </main>
  );
}
