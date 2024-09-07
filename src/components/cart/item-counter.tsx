'use client'

import { Minus, Plus } from 'lucide-react'

import { toast } from '@/hooks/use-toast'
import { useCartStore } from '@/store/cart'

import { Button } from '../ui/button'

interface ItemCounterProps {
  id: number
  quantity: number
  stock: number
}

export function ItemCounter({ id, quantity, stock }: ItemCounterProps) {
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity)
  const removeItem = useCartStore((state) => state.removeItem)

  const increment = () => {
    const newQuantity = quantity + 1
    if (newQuantity > stock) {
      toast({
        title: 'Out of stock',
      })
      return
    }
    updateItemQuantity(id, newQuantity)
  }

  const decrement = () => {
    const newQuantity = quantity - 1
    if (!newQuantity) {
      removeItem(id)
      toast({
        title: 'Item removed from cart',
      })
      return
    }
    updateItemQuantity(id, newQuantity)
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        onClick={decrement}
      >
        <Minus size={14} />
      </Button>

      <span className="text-base font-medium text-gray-500">{quantity}</span>

      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        onClick={increment}
      >
        <Plus size={14} />
      </Button>
    </div>
  )
}
