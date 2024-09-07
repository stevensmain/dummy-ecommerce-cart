import { type Metadata } from 'next';
import { Star, Truck } from 'lucide-react';

import { type Product } from '@/types/products';

import { Button } from '@/components/ui/button';
import { Gallery } from '@/components/gallery';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { discountPrice } from '@/helpers/products';

interface Props {
  params: { id: string };
}

async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return await response.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const product = await getProduct(id);

  return {
    title: product.title,
  };
}

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  const { images, category, title, price, description, discountPercentage } = product;

  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Gallery images={images} />

        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">{category}</span>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{title}</h2>
          </div>

          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="gap-x-2 rounded-full">
              <span className="text-sm">4.2</span>
              <Star className="h-5 w-5" />
            </Button>

            <span className="text-sm text-gray-500 transition duration-100">56 Ratings</span>
          </div>

          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">
                ${discountPrice(price, discountPercentage)}
              </span>
              <span className="mb-0.5 text-red-500 line-through">${price}</span>
            </div>

            <span className="text-sm text-gray-500">Incl. Vat plus shipping</span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <Truck className="h-6 w-6" />
            <span className="text-sm">2-4 Day Shipping</span>
          </div>

          <div className="flex gap-2.5">
            <AddToCartButton product={product} />
          </div>

          <p className="mt-12 text-base tracking-wide text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
