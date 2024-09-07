'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber > 0) {
      params.set('page', pageNumber.toString());
    } else {
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex w-full justify-between">
      <Button
        disabled={currentPage === 1}
        onClick={() => {
          createPageUrl(currentPage - 1);
        }}
      >
        Previous
      </Button>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => {
          createPageUrl(currentPage + 1);
        }}
      >
        Next
      </Button>
    </div>
  );
}
