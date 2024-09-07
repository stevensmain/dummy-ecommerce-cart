'use client'

import { toast } from '@/hooks/use-toast'
import { useCartStore } from '@/store/cart'
import { type Product } from '@/types/products'

import { Button } from './ui/button'

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleClick = () => {
    addItem(product)
    toast({ title: 'Added to cart' })
  }

  return (
    <Button className={className} onClick={handleClick}>
      Add to Cart
    </Button>
  )
}
