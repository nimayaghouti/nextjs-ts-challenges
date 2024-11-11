"use client";
import { useState } from "react";
import TodoOptions from "./TodoOptions";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const TodoApp = () => {
  const [status, setStatus] = useState<string>("all");
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };
  return (
    <section className="mt-4 w-1/2 min-w-72 mx-auto flex flex-col justify-center items-center gap-3">
      <h2 className="text-slate-800 text-3xl font-bold">TODO LIST</h2>
      <TodoOptions status={status} onStatusChange={handleStatusChange} />
      <TodoList tasks={tasks} />
    </section>
  );
};
export default TodoApp;
