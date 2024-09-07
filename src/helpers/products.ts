import { type SearchParamsProps } from '@/app/page';
import { type Product } from '@/types/products';

export function filterProducts(products: Product[], searchParams: SearchParamsProps) {
  return products.filter((product) => {
    const maxPrice = Number(searchParams.max);
    const minPrice = Number(searchParams.min);
    const minRating = Number(searchParams.rating);
    const minDiscount = Number(searchParams.disc);

    const withinPriceRange =
      (!searchParams.max || product.price <= maxPrice) &&
      (!searchParams.min || product.price >= minPrice);
    const hasRequiredRating = !searchParams.rating || product.rating >= minRating;
    const hasRequiredDiscount = !searchParams.disc || product.discountPercentage >= minDiscount;
    const matchesBrand = !searchParams.brand || product.brand === searchParams.brand;
    const matchesCategories = !searchParams.cat || product.category === searchParams.cat;

    return (
      withinPriceRange &&
      hasRequiredRating &&
      hasRequiredDiscount &&
      matchesBrand &&
      matchesCategories
    );
  });
}

export function discountPrice(price: number, discountPercentage: number) {
  const cashDiscount = (price * discountPercentage) / 100;
  const totalPrice = price - cashDiscount;
  return parseFloat(totalPrice.toFixed(2));
}
