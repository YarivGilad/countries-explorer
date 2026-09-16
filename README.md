# Countries Explorer

A small React app for learning React: browse 24 countries and click one to see its capital, population and languages.
It uses plain JavaScript, React and Vite. `PRD.md` says what the app should do, and `tasks.md` lists the tasks.

Open in the browser: (StackBlitz link coming)

## Run it on your computer

You need Node.js 24 LTS.

```bash
npm install
npm run dev
```

Then open the address that `npm run dev` prints, usually http://localhost:5173.

## Run the tests

```bash
npm test
```

## Data sources

All data is in `src/data/countries.json`.

- Name, flag, capital, region and languages: [mledoze/countries](https://github.com/mledoze/countries) (ODbL-1.0 license).
- Population: [World Bank indicator SP.POP.TOTL](https://data.worldbank.org/indicator/SP.POP.TOTL), values for the year 2025 (CC BY 4.0 license).
