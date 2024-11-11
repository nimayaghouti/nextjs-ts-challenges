"use client";
import { Todo, Column } from "@/app/table-pagination/page";
import TableContent from "./TableContent";
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

  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-16">
      <TableContent pageData={currentPageData} columns={columns} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Table;
