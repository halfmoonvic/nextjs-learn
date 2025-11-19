'use client';

import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      {/* Previous Button */}
      <Link
        href={createPageURL(currentPage - 1)}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : undefined}
        className={`flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors
          ${
            currentPage <= 1
              ? 'pointer-events-none border-gray-200 text-gray-300'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          }`}
      >
        Previous
      </Link>

      {/* Page Numbers (Simple version: just show current) */}
      <span className="flex items-center px-4 text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <Link
        href={createPageURL(currentPage + 1)}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
        className={`flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors
          ${
            currentPage >= totalPages
              ? 'pointer-events-none border-gray-200 text-gray-300'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          }`}
      >
        Next
      </Link>
    </div>
  );
}

