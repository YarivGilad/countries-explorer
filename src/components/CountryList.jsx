import CountryCard from './CountryCard';

export default function CountryList({ countries }) {
  return (
    <ul className="country-list">
      {countries.map((country) => (
        <li key={country.code}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
}
