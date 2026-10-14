import type { Country } from '../types';

type CountryCardProps = {
  country: Country;
  onSelect: (code: string) => void;
};

export default function CountryCard({ country, onSelect }: CountryCardProps) {
  return (
    <button className="country-card" onClick={() => onSelect(country.code)}>
      <span className="flag">{country.flag}</span> {country.name}
    </button>
  );
}
