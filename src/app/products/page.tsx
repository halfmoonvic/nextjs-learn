import { fetchProducts } from '@/lib/data';
import ProductCard from '@/components/ui/product-card';
import Pagination from '@/components/ui/pagination';
import Navbar from '@/components/ui/navbar';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const { products, totalPages } = await fetchProducts(currentPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">All Products</h1>

        {products.length === 0 ? (
           <div className="mt-12 text-center text-gray-500">No products found.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

