import { type ProductsResponse } from '@/types/products';

export async function getProducts(skip: number = 0, limit: number = 10): Promise<ProductsResponse> {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
}
