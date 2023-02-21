import { render, screen } from '@testing-library/react';
import Application from '../components/application';

test('Should test Application layout', () => {
  render(<Application />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
