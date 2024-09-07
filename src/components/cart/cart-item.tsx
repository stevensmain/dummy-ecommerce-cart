import Image from 'next/image'

import { type CartItem } from '@/types/cart'

import { RemoveItemButton } from './remove-item-button'
import { ItemCounter } from './item-counter'

interface CartItemProps {
  item: CartItem
}

export function CartItemCard({ item }: CartItemProps) {
  return (
    <div className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={item.images[0]}
          alt="Product image"
          width={100}
          height={100}
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.title}</h3>
            <p className="ml-4">${item.price}</p>
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
            {item.description}
          </p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <ItemCounter
            id={item.id}
            quantity={item.quantity}
            stock={item.stock}
          />

          <div className="flex">
            <RemoveItemButton id={item.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
