import { type Product } from '@/types/products';
import { type CartItem } from '@/types/cart';

export const product: Product = {
  id: 1,
  title: 'Dolce Shine Eau de',
  description:
    "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
  category: 'fragrances',
  price: 69.99,
  discountPercentage: 11.47,
  rating: 2.68,
  stock: 3,
  tags: ['fragrances', 'perfumes'],
  brand: 'Dolce & Gabbana',
  sku: '1NBFK980',
  weight: 5,
  dimensions: { width: 17, height: 24.57, depth: 13.3 },
  warrantyInformation: '5 year warranty',
  shippingInformation: 'Ships in 1-2 business days',
  availabilityStatus: 'Low Stock',
  reviews: [],
  returnPolicy: '30 days return policy',
  minimumOrderQuantity: 9,
  meta: {
    createdAt: '2024-05-23T08:56:21.619Z',
    updatedAt: '2024-05-23T08:56:21.619Z',
    barcode: '1939383392674',
    qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
  },
  images: [
    'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png',
    'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png',
    'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png',
  ],
  thumbnail:
    'https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png',
};

export const cartItem: CartItem = { ...product, title: 'Product 1', quantity: 1 };
