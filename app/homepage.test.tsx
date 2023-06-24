import { render, screen, within } from '@testing-library/react';
import Home from './page';

import { page } from './page.constants';

describe('home', () => {
  it('should show the title of the page', () => {
    render(<Home />);
    const main = within(screen.getByRole('main'));
    expect(
      main.getByRole('heading', { level: 1, name: page.title })
    ).toBeInTheDocument();
  });

  describe('buttons test', () => {
    it('should have a create a new quiz button', () => {
      render(<Home />);
      const main = within(screen.getByRole('main'));
      expect(
        main.getByRole('button', { name: page.primaryButtonText })
      ).toBeInTheDocument();
    });

    it('should have a answer a quiz button', () => {
      render(<Home />);
      const main = within(screen.getByRole('main'));
      expect(
        main.getByRole('button', { name: page.secondaryButtonText })
      ).toBeInTheDocument();
    });
  });
});
