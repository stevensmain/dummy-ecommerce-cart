import { act, renderHook } from '@testing-library/react';

import { useCartStore } from '@/store/cart';
import { cartItem as cartItem1 } from '@/mocks/products';

const cartItem2 = { ...cartItem1, id: 2, title: 'Product 2', quantity: 1 };

describe('Cart Store', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useCartStore());
    const cartStore = result.current;

    act(() => {
      cartStore.clearCart();
    });
  });

  test('Must be add an item to the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem(cartItem1);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual(expect.objectContaining({ id: 1, title: 'Product 1' }));
  });

  test('Must be update the quantity of an item in the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem(cartItem1);
      result.current.updateItemQuantity(1, 3);
    });

    expect(result.current.items[0].quantity).toBe(3);
  });

  test('Must be remove an item from the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem(cartItem1);
      result.current.removeItem(cartItem1.id);
    });

    expect(result.current.items).toHaveLength(0);
  });

  test('Must be clear the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem(cartItem1);
      result.current.clearCart();
    });

    expect(result.current.items).toHaveLength(0);
  });

  test('Should calculate the total price of the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem(cartItem1);
      result.current.addItem(cartItem2);
    });

    const totalPrice = result.current.getTotalPrice();
    expect(totalPrice).toBe(123.92);
  });

  test('Must be calculate the total items in the cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItem(cartItem1);
      result.current.addItem(cartItem2);
      result.current.updateItemQuantity(cartItem1.id, 2);
    });

    const totalItems = result.current.getTotalItems();
    expect(totalItems).toBe(8);
  });
});
