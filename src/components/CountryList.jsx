import CountryCard from './CountryCard';

export default function CountryList({ countries, onSelect }) {
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
