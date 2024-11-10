import ArrowLeftIcon from "@/assets/svg/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/svg/ArrowRightIcon";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
}: PaginationProps) => {
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  const visiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage === 1) {
      return [1, 2, 3];
    } else if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const goToPrevPage = () => {
    if (!isPrevDisabled) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!isNextDisabled) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPage = (page: number) => {
    onPageChange(page);
  };

  const paginationButtonClass =
    "flex justify-center items-center text-sm rounded font-semibold w-10 h-10 p-3.5 list-none cursor-pointer active:bg-slate-900 active:text-white";

  return (
    <ul className={`flex justify-center items-center gap-2 ${className}`}>
      <li
        className={`${paginationButtonClass} bg-slate-200 text-slate-900 ${
          isPrevDisabled && "opacity-40 pointer-events-none"
        }`}
        onClick={goToPrevPage}
      >
        <ArrowLeftIcon />
      </li>
      {visiblePages().map((page) => (
        <li
          key={page}
          className={`${paginationButtonClass} ${
            page === currentPage
              ? "bg-slate-900 text-white"
              : "bg-slate-200 text-slate-900"
          }`}
          onClick={() => goToPage(page)}
        >
          {page}
        </li>
      ))}
      <li
        className={`${paginationButtonClass} bg-slate-200 text-slate-900 ${
          isNextDisabled && "opacity-40 pointer-events-none"
        }`}
        onClick={goToNextPage}
      >
        <ArrowRightIcon />
      </li>
    </ul>
  );
};

export default Pagination;
