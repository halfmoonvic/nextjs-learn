import Link from 'next/link';
import { Product } from '@/lib/placeholder-data';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-black hover:shadow-lg"
    >
      <div className="aspect-square w-full bg-gray-100 object-cover" />
      {/* Placeholder for Image, using div for now to avoid remote patterns setup */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-black">
            ${product.price} {product.currency}
          </p>
          {!product.inStock && (
            <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

