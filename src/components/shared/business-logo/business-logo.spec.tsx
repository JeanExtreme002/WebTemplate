import { render, screen } from '@testing-library/react';

import { BusinessLogo } from './business-logo';

describe('<BusinessLogo />', () => {
  it('should render an image', () => {
    render(<BusinessLogo />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
