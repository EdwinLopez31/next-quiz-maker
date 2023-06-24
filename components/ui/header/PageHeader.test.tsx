import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

const pageTitle = 'Test Title';

describe('Page Header Component', () => {
  it('should have a h1 stating my next js boilerplate', () => {
    const page = render(<PageHeader title={pageTitle} />);

    expect(
      page.getByRole('heading', { level: 1, name: /Test Title/i })
    ).toBeInTheDocument();
  });
});
