import { render, screen } from '@testing-library/react';
import Application from '../components/applications/application';

test('renders learn react link', () => {
  render(<Application />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
