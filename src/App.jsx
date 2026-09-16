import { useState } from 'react';
import countries from './data/countries.json';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

export default function App() {
  const [selectedCode, setSelectedCode] = useState(null);
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
