import { fetchProductById } from '@/lib/data';
import Navbar from '@/components/ui/navbar';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/products"
          className="mb-6 inline-block text-sm font-medium text-gray-600 hover:text-black hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Section */}
          <div className="aspect-square w-full rounded-lg bg-gray-200" />
          {/* Placeholder for Image */}

          {/* Details Section */}
          <div className="flex flex-col">
            <div className="mb-2 text-sm font-medium text-gray-500">{product.category}</div>
            <h1 className="mb-4 text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mb-6 text-2xl font-bold text-black">
              ${product.price} {product.currency}
            </div>

            <p className="mb-8 text-gray-600 leading-relaxed">{product.description}</p>

            <div className="mt-auto">
              {!product.inStock ? (
                 <button
                  disabled
                  className="w-full rounded-lg bg-gray-200 py-4 text-lg font-bold text-gray-400 cursor-not-allowed"
                >
                  Out of Stock
                </button>
              ) : (
                <button className="w-full rounded-lg bg-black py-4 text-lg font-bold text-white transition-opacity hover:opacity-90">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

