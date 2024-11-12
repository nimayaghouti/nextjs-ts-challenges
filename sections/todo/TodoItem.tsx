import TodoForm from "./TodoForm";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import EditIcon from "@/assets/svg/EditIcon";
import useModal from "@/hooks/useModal";
import { formatDate } from "@/utils/dateFormatter";
import { Task } from "@/types/task";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "@/store/slices/taskSlice";
import { AppDispatch } from "@/store/store";

interface TodoItemProps {
  task: Task;
}

const TodoItem = ({ task }: TodoItemProps) => {
  const { isOpen, openModal, closeModal } = useModal();
  const dispatch: AppDispatch = useDispatch();

  const handleUpdateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTask = {
      ...task,
      status: event.target.checked ? "complete" : "incomplete",
    };

    dispatch(updateTask(updatedTask));
  };

  return (
    <>
      <div className="flex justify-center items-center bg-white rounded-lg p-3 gap-4">
        <Input
          type="checkbox"
          className="[&_input]:bg-gray-200 [&_input]:rounded-[0.2rem] [&_input]:h-8 [&_input]:w-8 [&_input]:p-2 outline-none [&_input]:cursor-pointer [&_input]:appearance-none [&_input:checked]:appearance-auto"
          checked={task.status === "complete"}
          onChange={handleUpdateTask}
        />
        <div className="text-slate-800 flex-grow">
          <h3
            className={`text-base font-medium ${
              task.status === "complete" ? "opacity-70 line-through" : ""
            }`}
          >
            {task.title}
          </h3>
          <p className="text-xs">{formatDate(task.date)}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span
            className="h-9 w-8 p-1 bg-gray-300 text-slate-700 rounded-md cursor-pointer [&_*]:h-full [&_*]:w-full"
            onClick={() => dispatch(removeTask(task.id))}
          >
            <DeleteIcon />
          </span>
          <span
            className="h-9 w-8 p-1 bg-gray-300 text-slate-700 rounded-md cursor-pointer [&_*]:h-full [&_*]:w-full"
            onClick={openModal}
          >
            <EditIcon />
          </span>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TodoForm close={closeModal} data={task} />
      </Modal>
    </>
  );
};

export default TodoItem;
