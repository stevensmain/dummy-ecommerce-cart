'use client';

import { useCartStore } from '@/store/cart';

import { CartItemCard } from './cart-item';

export default function CartList() {
  const cartItems = useCartStore((state) => state.items);

  if (cartItems.length === 0) {
    return <p className="mt-12 text-center text-xl">No products found</p>;
  }

  return (
    <div className="-my-6 divide-y divide-gray-200">
      {cartItems.map((item) => (
        <CartItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
