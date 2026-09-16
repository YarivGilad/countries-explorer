export default function CountryCard({ country, onSelect }) {
  return (
    <button className="country-card" onClick={onSelect(country.code)}>
      <span className="flag">{country.flag}</span> {country.name}
    </button>
  );
}
