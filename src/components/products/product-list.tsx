import { getProducts } from '@/services/products';
import { filterProducts } from '@/helpers/products';

import { type SearchParamsProps } from '@/app/page';

import ProductCard from './product-card';
import Pagination from '../pagination';

interface ProductListProps {
  searchParams: SearchParamsProps;
}

const LIMIT = 9;

export default async function ProductList({ searchParams }: ProductListProps) {
  const SKIP = searchParams.page ? parseInt(searchParams.page) * LIMIT : 0;
  const { products, total } = await getProducts(SKIP, LIMIT);
  const totalPages = Math.ceil(total / LIMIT);

  const filteredProducts = filterProducts(products, searchParams);

  if (filteredProducts.length === 0) {
    return <p className="mt-12 text-center text-xl">No products found</p>;
  }

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination currentPage={Number(searchParams.page) || 1} totalPages={totalPages} />
    </>
  );
}
