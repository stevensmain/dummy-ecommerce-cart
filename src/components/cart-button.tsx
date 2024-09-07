'use client'
import { ShoppingBag } from 'lucide-react'

import { useCartStore } from '@/store/cart'

import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function CartButton() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full border-none"
    >
      <ShoppingBag />
      <Badge variant="destructive" className="absolute -right-3 -top-3 h-8 w-8">
        {totalItems}
      </Badge>
    </Button>
  )
}
