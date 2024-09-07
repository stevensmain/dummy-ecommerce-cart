import { act, render, renderHook, screen } from '@testing-library/react';

import { useCartStore } from '@/store/cart';

import CartList from '@/components/cart/cart-list';
import { cartItem as cartItem1 } from '@/mocks/products';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => <img src={src} alt={alt} width={width} height={height} />,
}));

jest.mock('../../../components/cart/item-counter', () => ({
  ItemCounter: ({ id, quantity }: { id: number; quantity: number }) => (
    <div data-testid={`item-counter-${id}`}>Quantity: {quantity}</div>
  ),
}));

jest.mock('../../../components/cart/remove-item-button', () => ({
  RemoveItemButton: ({ id }: { id: number }) => (
    <button data-testid={`remove-button-${id}`}>Remove</button>
  ),
}));

const cartItem2 = {
  ...cartItem1,
  description: 'Product description',
  price: 80,
  id: 2,
  title: 'Product 2',
  quantity: 1,
};

describe('CartList', () => {
  test('Should display a message when the cart is empty', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.clearCart();
    });

    render(<CartList />);

    expect(screen.getByText('No products found')).toBeInTheDocument();
  });

  test('Should show cart items when there are products', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem(cartItem1);
      result.current.addItem(cartItem2);
    });

    render(<CartList />);

    expect(screen.getByText(cartItem1.title)).toBeInTheDocument();
    expect(screen.getByText(`$${cartItem1.price}`)).toBeInTheDocument();
    expect(screen.getByText(cartItem1.description)).toBeInTheDocument();
    expect(screen.getByTestId(`item-counter-${cartItem1.id}`)).toHaveTextContent(
      `Quantity: ${cartItem1.quantity}`,
    );
    expect(screen.getByTestId(`remove-button-${cartItem1.id}`)).toBeInTheDocument();
    expect(screen.getAllByAltText('Product image')[0]).toHaveAttribute('src', cartItem1.images[0]);

    expect(screen.getByText(cartItem2.title)).toBeInTheDocument();
    expect(screen.getByText(`$${cartItem2.price}`)).toBeInTheDocument();
    expect(screen.getByText(cartItem2.description)).toBeInTheDocument();
    expect(screen.getByTestId(`item-counter-${cartItem2.id}`)).toHaveTextContent(
      `Quantity: ${cartItem2.quantity}`,
    );
    expect(screen.getByTestId(`remove-button-${cartItem2.id}`)).toBeInTheDocument();
    expect(screen.getAllByAltText('Product image')[1]).toHaveAttribute('src', cartItem2.images[0]);
  });
});
