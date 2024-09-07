export async function getCategories(): Promise<string[]> {
  const response = await fetch('https://dummyjson.com/products/category-list')
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return await response.json()
}
