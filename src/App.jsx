import countries from './data/countries.json';
import CountryList from './components/CountryList';

export default function App() {
  return (
    <main className="app">
      <h1>Countries Explorer</h1>
      <div className="layout">
        <CountryList countries={countries} />
      </div>
    </main>
  );
}
