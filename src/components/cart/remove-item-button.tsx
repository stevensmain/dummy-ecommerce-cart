import { toast } from '@/hooks/use-toast';
import { useCartStore } from '@/store/cart';

import { Button } from '../ui/button';

interface RemoveItemButtonProps {
  id: number;
}

export function RemoveItemButton({ id }: RemoveItemButtonProps) {
  const removeItem = useCartStore((state) => state.removeItem);

  const handleRemove = () => {
    removeItem(id);
    toast({
      title: 'Item removed from cart',
    });
  };

  return (
    <Button onClick={handleRemove} className="font-medium">
      Remove
    </Button>
  );
}
