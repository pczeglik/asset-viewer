import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);

  const viewerElement = screen.getByAltText(/viewer asset/i);
  expect(viewerElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Cat/i);
  expect(buttonElement).toBeInTheDocument();
});
