"use client";
import { useState } from "react";
import TodoOptions from "./TodoOptions";

const TodoApp = () => {
  const [status, setStatus] = useState<string>("all");

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };
  return (
    <section className="min-h-screen w-1/2 min-w-72 mx-auto flex flex-col justify-center items-center gap-3">
      <h2 className="text-slate-800 text-3xl font-bold">TODO LIST</h2>
      <TodoOptions status={status} onStatusChange={handleStatusChange} />
    </section>
  );
};
export default TodoApp;
