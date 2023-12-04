import { Button } from "@/components/shadcn/ui";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const visiblePages = 8;
  const halfVisiblePages = Math.floor(visiblePages / 2);

  const startPage = Math.max(1, currentPage - halfVisiblePages);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex w-full max-w-[100%] overflow-hidden px-4 sm:justify-start md:justify-center">
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((page) => (
        <Button
          key={page}
          onClick={() => handleClick(page)}
          style={{
            background:
              page === currentPage
                ? "-webkit-linear-gradient(45deg, #ff8a00, #e52e71)"
                : "#fff",
          }}
          className={`mx-1 rounded-md px-3 py-1 shadow  transition-all hover:brightness-110`}
        >
          <span
            style={{
              color: "#fff",
              background:
                page === currentPage
                  ? "transparent"
                  : "-webkit-linear-gradient(45deg, #ff8a00, #e52e71)",
              WebkitBackgroundClip: page === currentPage ? "initial" : "text",
              WebkitTextFillColor:
                page === currentPage ? "initial" : "transparent",
            }}
          >
            {page}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
