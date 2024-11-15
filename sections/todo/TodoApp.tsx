"use client";
import { useState, useMemo } from "react";
import TodoOptions from "./TodoOptions";
import TodoList from "./TodoList";
import Pagination from "@/components/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import usePagination from "@/hooks/usePagination";

const TodoApp = () => {
  const [status, setStatus] = useState<string>("all");
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const filteredTasks = useMemo(() => {
    return status === "complete"
      ? tasks.filter((task) => task.status === "complete")
      : status === "incomplete"
      ? tasks.filter((task) => task.status === "incomplete")
      : tasks;
  }, [status, tasks]);

  const { totalPages, currentPage, currentPageData, handlePageChange } =
    usePagination(filteredTasks, 4);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };
  return (
    <section className="mt-4 w-1/2 min-w-72 mx-auto flex flex-col justify-center items-center gap-3">
      <h2 className="text-slate-800 text-3xl font-bold">TODO LIST</h2>
      <TodoOptions status={status} onStatusChange={handleStatusChange} />
      <TodoList tasks={currentPageData} />
      {totalPages > 1 && (
        <Pagination
          className="todo__pagination"
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};
export default TodoApp;
