"use client";
import { Todo, Column } from "@/app/table-pagination/page";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/Pagination";

interface Props {
  data: Todo[];
  itemsPerPage: number;
  columns: Column[];
}

const Table = ({ data, itemsPerPage, columns }: Props) => {
  const { totalPages, currentPage, currentPageData, handlePageChange } =
    usePagination(data, itemsPerPage);

  console.log(columns);
  console.log(currentPage, currentPageData);
  return (
    <div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Table;
