import { generatePagination } from "@/lib/pagination";
import Link from "next/link";

import type { FC } from "react";

export interface PaginationProps {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
}

const Pagination: FC<PaginationProps> = ({ current, pages, link }) => {
  const pagination = generatePagination(current, pages);
  return (
    <ul className="m-0 mt-12 p-0">
      {pagination.map((it, i) => (
        <li key={i} className="inline-block mr-4 text-gray-400 text-xl">
          {it.excerpt ? (
            "..."
          ) : (
            <Link
              className={it.page === current ? "text-gray-800 font-bold" : undefined}
              href={link.href(it.page ?? 1)}
              as={link.as(it.page ?? 1)}
            >
              {it.page}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
