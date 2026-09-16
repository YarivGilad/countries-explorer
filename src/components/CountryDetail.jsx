export default function CountryDetail({ country }) {
  if (!country) {
    return <section className="country-detail">Pick a country</section>;
  }

  return (
    <section className="country-detail">
      <h2>{country.flag} {country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString('en-US')}</p>
      <p>Languages: {country.languages.join(', ')}</p>
    </section>
  );
}
