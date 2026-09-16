export default function CountryCard({ country }) {
  return (
    <div className="country-card">
      <span className="flag">{country.flag}</span> {country.name}
    </div>
  );
}
