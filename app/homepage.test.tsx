import { render, screen, within } from '@testing-library/react';
import Home from './page';

describe('home', () => {
  it('should have a h1 stating my next js boilerplate', () => {
    render(<Home />);
    const main = within(screen.getByRole('main'));
    expect(
      main.getByRole('heading', { level: 1, name: /My NextJS Boilerplate/i })
    ).toBeInTheDocument();
  });
});
