import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { discountPrice } from '@/helpers/products';
import { type Product } from '@/types/products';
import { type CartItem } from '@/types/cart';

interface CartState {
  items: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex((i) => i.id === item.id);

          if (existingItemIndex >= 0) {
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += 1;
            return { items: newItems };
          }

          const newItem: CartItem = { ...item, quantity: 1 };
          return { items: [...state.items, newItem] };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      updateItemQuantity: (id, quantity) => {
        set((state) => {
          const newItems = state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          );
          return { items: newItems };
        });
      },
      clearCart: () => {
        set(() => ({
          items: [],
        }));
      },
      getTotalPrice: () => {
        const total = get().items.reduce((sum, item) => {
          const totalPrice = discountPrice(item.price, item.discountPercentage);
          return sum + totalPrice * item.quantity;
        }, 0);
        return total;
      },
      getTotalItems: () => {
        const total = get().items.reduce((sum, item) => sum + item.quantity, 0);
        return total;
      },
    }),
    {
      name: 'cart-store',
      getStorage: () => localStorage,
    },
  ),
);
