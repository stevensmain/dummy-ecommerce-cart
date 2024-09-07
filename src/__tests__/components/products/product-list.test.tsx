import { render, screen, waitFor } from '@testing-library/react';

import { getProducts } from '@/services/products';
import { filterProducts } from '@/helpers/products';

import ProductList from '@/components/products/product-list';

jest.mock('../../../services/products', () => ({
  getProducts: jest.fn(),
}));

jest.mock('../../../helpers/products', () => ({
  filterProducts: jest.fn(),
  discountPrice: jest.fn((price, discountPercentage) => price - (price * discountPercentage) / 100),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
  }),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    images: ['/image1.jpg'],
    category: 'Category 1',
    price: 100,
    discountPercentage: 10,
    brand: 'Brand 1',
  },
  {
    id: 2,
    title: 'Product 2',
    images: ['/image2.jpg'],
    category: 'Category 2',
    price: 200,
    discountPercentage: 20,
    brand: 'Brand 2',
  },
];

const responseMock = { products: mockProducts, total: 18 };

describe('ProductList Component', () => {
  const setup = async () => {
    const jsx = await ProductList({ searchParams: { page: '1' } });
    render(jsx);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render a message when no products are found', async () => {
    (getProducts as jest.Mock).mockResolvedValue({ products: [], total: 0 });
    (filterProducts as jest.Mock).mockReturnValue([]);

    await setup();

    await waitFor(() => {
      expect(screen.getByText('No products found')).toBeInTheDocument();
    });
  });

  test('should render product cards when products are available', async () => {
    (getProducts as jest.Mock).mockResolvedValue(responseMock);
    (filterProducts as jest.Mock).mockReturnValue(mockProducts);

    await setup();

    await waitFor(() => {
      mockProducts.forEach((product) => {
        expect(screen.getByText(product.title)).toBeInTheDocument();
        expect(screen.getByText(`${product.brand} - ${product.category}`)).toBeInTheDocument();
        expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
        expect(screen.getByText(`-${product.discountPercentage}%`)).toBeInTheDocument();
      });
    });
  });
});
