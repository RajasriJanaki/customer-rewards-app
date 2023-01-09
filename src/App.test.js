import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Customer Rewards Program/i);
  expect(linkElement).toBeInTheDocument();
});
