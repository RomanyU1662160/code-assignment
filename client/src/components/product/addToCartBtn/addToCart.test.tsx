import { screen, render, fireEvent } from '@testing-library/react';
import AddToCartBtn from './AddToCartBtn';

const props = {
  handleAddToCart: jest.fn(),
};

describe('AddToCartBtn', () => {
  it('should render correctly', () => {
    render(<AddToCartBtn {...props} />);
    expect(
      screen.getByRole('button', { name: 'Add to cart' })
    ).toBeInTheDocument();
  });

  it('should call the addToCart function when the button is clicked', () => {
    render(<AddToCartBtn {...props} />);
    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });
    addToCartButton.click();
    expect(props.handleAddToCart).toHaveBeenCalled();
  });
  it('should call the addToCart function when the enter key is pressed', () => {
    render(<AddToCartBtn {...props} />);
    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });

    addToCartButton.focus();
    fireEvent.keyDown(addToCartButton, { key: 'Enter' });

    expect(props.handleAddToCart).toHaveBeenCalled();
  });
});
