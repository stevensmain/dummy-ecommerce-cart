import Link from 'next/link';
import Image from 'next/image';

import { discountPrice } from '@/helpers/products';
import { type Product } from '@/types/products';

import { AddToCartButton } from '../add-to-cart-button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, images, title, category, price, discountPercentage, brand } = product;
  const totalPrice = discountPrice(price, discountPercentage);

  return (
    <Link href={`/product/${id}`} className="group relative">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
        <Image
          src={images[0]}
          alt={`Product ${title} thumbnail`}
          width={300}
          height={300}
          className="easy absolute z-10 rounded-md object-cover transition-opacity duration-500"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {brand && `${brand} - `} {category}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-baseline gap-1">
            <p className="text-sm text-gray-500">-{discountPercentage}%</p>
            <p className="text-sm font-medium text-destructive line-through">${price}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${totalPrice}</p>
        </div>
      </div>

      <AddToCartButton
        product={product}
        className="mt-2 h-auto w-max bg-destructive px-4 py-[5px] text-xs hover:bg-primary/90"
      />
    </Link>
  );
}
