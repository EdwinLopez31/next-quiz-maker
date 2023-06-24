import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomButton from './CustomButton';

describe('Custom Button Component', () => {
  it('should be displayed in the document', () => {
    render(<CustomButton text="Click Me" />);
    const btn = screen.getByRole('button', { name: 'Click Me' });
    expect(btn).toBeInTheDocument();
  });

  it('should trigger the passed onClick function', async () => {
    const mockOnClick = vi.fn();
    render(<CustomButton text="Click Me" onClick={mockOnClick} />);
    const btn = screen.getByRole('button', { name: 'Click Me' });
    await userEvent.click(btn);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
