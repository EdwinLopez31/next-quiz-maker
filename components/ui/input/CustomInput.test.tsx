import { render, screen } from '@testing-library/react';
import CustomInput from './CustomInput';
import userEvent from '@testing-library/user-event';
describe('Custom Input Component', () => {
  const customInputAttr = {
    name: 'testname',
    id: 'testid',
    label: 'testlbl',
  };
  it('should be visible (queryable) from the document', () => {
    render(<CustomInput {...customInputAttr} />);

    // querying by role and name is not working as expected
    // ref: https://stackoverflow.com/questions/65986454/how-to-fetch-element-with-name-attribute-in-react-testing-library
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'name',
      customInputAttr.name
    );
  });

  it('should reflect what the user is typing', async () => {
    render(<CustomInput {...customInputAttr} />);

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'test');

    expect(screen.getByRole('textbox')).toHaveValue('test');
  });

  describe('Input Label', () => {
    it('should trigger the custom input', () => {
      render(
        <CustomInput
          isLabelVisible
          labelText={customInputAttr.label}
          {...customInputAttr}
        />
      );

      expect(screen.getByLabelText(customInputAttr.label)).toBeInTheDocument();
    });

    it('should show right label text', () => {
      render(
        <CustomInput
          isLabelVisible
          labelText={customInputAttr.label}
          {...customInputAttr}
        />
      );

      expect(screen.getByText(customInputAttr.label)).toBeInTheDocument();
    });
  });
});
