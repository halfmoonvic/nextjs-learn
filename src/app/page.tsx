import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import ProductCard from '@/components/ui/product-card';
import { fetchProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default async function Home() {
  // Fetch first 3 products for the featured section
  const { products: featuredProducts } = await fetchProducts(1);
  const featuredSlice = featuredProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Summer Collection 2024
          </h1>
          <p className="mb-8 text-lg text-gray-300 md:text-xl">
            Discover the latest trends in footwear and fashion.
          </p>
          <Button asChild size="lg" className="rounded-full text-lg font-bold">
            <Link href="/products">
              Shop Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link href="/products" className="text-blue-600 hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSlice.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
