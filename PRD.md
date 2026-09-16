# PRD — Countries Explorer

## One-sentence pitch
A small web app to browse countries and see key facts about the one you pick.

## Who it is for
Students who want a quick look at a country's capital, population and languages.

## Screens
1. Country list: every country with its flag and name.
2. Details panel: facts about the selected country, next to the list.

## Must-have features
1. Show a list of countries.
2. Click a country to see its details.
3. Before any click, the details panel asks you to pick a country.

## Acceptance criteria
- When I open the app, I see a list of countries with their flags.
- Before I click anything, I see "Pick a country".
- When I click a country, I see its capital, population and languages.

## Not now
- Search box and region filter.
- Loading data from a live API (next lesson).
- A separate page for each country (routing).

## Data
Local file `src/data/countries.json` (24 countries).
Fields: code, name, flag, capital, region, population, languages.
