import { PLACEHOLDER_PRODUCTS, Product } from './placeholder-data';

const ITEMS_PER_PAGE = 6;

export async function fetchProducts(
  page: number = 1
): Promise<{ products: Product[]; totalPages: number }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const offset = (page - 1) * ITEMS_PER_PAGE;
  const products = PLACEHOLDER_PRODUCTS.slice(offset, offset + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(PLACEHOLDER_PRODUCTS.length / ITEMS_PER_PAGE);

  return { products, totalPages };
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return PLACEHOLDER_PRODUCTS.find((product) => product.id === id);
}

