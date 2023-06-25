import { render, screen, within } from '@testing-library/react';
import CreateQuiz from './page';

describe('Create Quiz Page', () => {
  it('should have a form component', () => {
    render(<CreateQuiz />);

    const main = within(screen.getByRole('main'));
    expect(
      main.getByRole('form', {
        hidden: true,
      })
    ).toBeInTheDocument();
  });
});
