import type { Country } from '../types';
import CountryCard from './CountryCard';

type CountryListProps = {
  countries: Country[];
  onSelect: (code: string) => void;
};

export default function CountryList({ countries, onSelect }: CountryListProps) {
  return (
    <ul className="country-list">
      {countries.map((country) => (
        <li key={country.code}>
          <CountryCard country={country} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}
