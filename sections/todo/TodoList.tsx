// import TodoItem from "./TodoItem";
import { Task } from "@/types/task";

interface TodoListProps {
  tasks: Task[];
}

const TodoList = ({ tasks }: TodoListProps) => {
  return (
    <div className="rounded-2xl p-6 w-full bg-gray-200">
      {tasks.length === 0 ? (
        <p className="mx-auto py-2 px-4 bg-neutral-400 text-slate-800 font-medium w-max rounded-xl">
          No Todos
        </p>
      ) : (
        <ul className="flex flex-col justify-center items-stretch gap-6">
          {tasks.map((task: Task) => (
            // <TodoItem key={task.id} task={task} className="list__item" />
            <p key={task.id}>{task.title}</p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
