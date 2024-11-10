import { useState, useEffect } from "react";

interface PaginationResult<T> {
  totalPages: number;
  currentPage: number;
  currentPageData: T[];
  handlePageChange: (newPage: number) => void;
}

const usePagination = <T,>(
  data: T[] = [],
  itemsPerPage: number = 10
): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentPageData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
  };

  return { totalPages, currentPage, currentPageData, handlePageChange };
};

export default usePagination;
