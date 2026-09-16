import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import App from './App';

test('when I open the app, I see a list of countries', () => {
  render(<App />);

  expect(screen.getByRole('button', { name: /japan/i })).toHaveTextContent('🇯🇵');
  expect(screen.getByRole('button', { name: /brazil/i })).toHaveTextContent('🇧🇷');
});

test('before I click anything, I see "Pick a country"', () => {
  render(<App />);

  expect(screen.getByText('Pick a country')).toBeInTheDocument();
});

test('when I click a country, I see its capital, population and languages', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: /japan/i }));

  expect(screen.getByText('Capital: Tokyo')).toBeInTheDocument();
  expect(screen.getByText('Population: 123,366,734')).toBeInTheDocument();
  expect(screen.getByText('Languages: Japanese')).toBeInTheDocument();
});
