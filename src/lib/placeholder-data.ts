export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  inStock: boolean;
};

export const PLACEHOLDER_PRODUCTS: Product[] = Array.from({ length: 50 }).map(
  (_, i) => ({
    id: `prod-${i + 1}`,
    name: `Nike Air Max ${i + 1}00`,
    description: `Experience the ultimate comfort with Nike Air Max ${
      i + 1
    }00. Perfect for running and casual wear.`,
    price: 99 + (i % 10) * 10,
    currency: 'USD',
    image: `/placeholder.svg`, // Utilizing default Next.js placeholder for now
    category: i % 2 === 0 ? 'Running' : 'Lifestyle',
    inStock: i % 5 !== 0, // 20% out of stock
  })
);

