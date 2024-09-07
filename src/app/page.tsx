import { Suspense } from 'react';

import Skeleton from '@/components/skeleton';
import ProductList from '@/components/products/product-list';
import ProductFilters from '@/components/products/product-filters';

export interface SearchParamsProps {
  page?: string;
  disc?: string;
  rating?: string;
  min?: string;
  max?: string;
  brand?: string;
  cat?: string;
}

export default async function Home({ searchParams }: { searchParams: SearchParamsProps }) {
  return (
    <>
      <ProductFilters />

      <Suspense fallback={<Skeleton />}>
        <ProductList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
