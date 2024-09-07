export interface Product {
  id: number
  title: string
  description: string
  category: Category
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: AvailabilityStatus
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta?: Meta
  images: string[]
  thumbnail: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export type AvailabilityStatus = 'In Stock' | 'Low Stock'

export type Category = 'beauty' | 'fragrances' | 'furniture' | 'groceries'

export interface Dimensions {
  width: number
  height: number
  depth: number
}

export interface Meta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export interface Review {
  rating: number
  comment: string
  date: Date
  reviewerName: string
  reviewerEmail: string
}
