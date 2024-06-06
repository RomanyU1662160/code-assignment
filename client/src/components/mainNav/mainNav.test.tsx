import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainNav from './MainNav';

describe('MainNav accessibility', () => {
  it('renders the main nav', () => {
    render(<MainNav />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the brand logo', () => {
    render(<MainNav />);

    expect(screen.getByAltText('Octopus logo')).toBeInTheDocument();
    expect(screen.getByAltText('Octopus logo')).toHaveAttribute(
      'alt',
      'Octopus logo'
    );
    expect(screen.getByAltText('Octopus logo')).toHaveAttribute(
      'src',
      '/octopus-logo.svg'
    );
  });

  it('renders the basket icon', () => {
    render(<MainNav />);

    expect(screen.getByAltText('basket icon')).toBeInTheDocument();
    expect(screen.getByAltText('basket icon')).toHaveAttribute(
      'alt',
      'basket icon'
    );
    expect(screen.getByAltText('basket icon')).toHaveAttribute(
      'src',
      '/basket.svg'
    );
  });
});
