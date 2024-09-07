'use client';

import { toast } from '@/hooks/use-toast';
import { useCartStore } from '@/store/cart';

import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

export default function CartDetails() {
  const totalAmount = useCartStore((state) => state.getTotalPrice());
  const clearCart = useCartStore((state) => state.clearCart);

  const handleBuy = () => {
    if (!totalAmount) {
      toast({
        title: 'Error',
        description: 'Your cart is empty',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Success',
      description: 'Thank you for your purchase!',
    });
    clearCart();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Details</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="font-medium text-primary">
          <strong>Total: </strong>
          {totalAmount}$
        </h2>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button variant="default" className="w-full" onClick={clearCart}>
          Clear
        </Button>
        <Button variant="secondary" className="w-full" onClick={handleBuy}>
          Purchase
        </Button>
      </CardFooter>
    </Card>
  );
}
