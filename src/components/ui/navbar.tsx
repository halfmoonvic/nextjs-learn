import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-black">
          Next.js Learn Store
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-black">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

