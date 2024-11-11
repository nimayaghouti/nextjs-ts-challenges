import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Task } from "@/types/task";

interface TodoFormProps {
  data?: Task | null;
  close: () => void;
}

interface FormData {
  title: string;
  status: string;
}

const TodoForm = ({ data = null, close }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data?.title || "",
      status: data?.status || "incomplete",
    },
  });

  const onSubmit = (formData: FormData) => {
    console.log(formData);
    // if (data) {
    //   const updatedTask = {
    //     ...data,
    //     ...formData,
    //   };
    //   updateTask(updatedTask);
    // } else {
    //   const newTask = {
    //     ...formData,
    //     id: Date.now(),
    //     date: new Date(),
    //   };
    //   addTask(newTask);
    // }
    close();
  };

  return (
    <form
      className="flex flex-col justify-center items-stretch gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-2xl font-bold text-slate-600">
        {data ? "Update" : "Add"} TODO
      </div>
      <Input
        label="Title"
        id="title"
        placeholder="Enter Task Title"
        {...register("title", { required: "Task Title is required." })}
        error={errors.title}
      />
      <div className="flex flex-col justify-center items-stretch gap-1">
        <label htmlFor="status" className="text-slate-800 text-lg">
          Status
        </label>
        <select
          id="status"
          {...register("status")}
          className="p-3 cursor-pointer rounded-md bg-slate-200 text-slate-900 font-medium"
        >
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="flex justify-start gap-4 mt-6">
        <Button type="submit">{data ? "Update" : "Add"} task</Button>
        <Button variant="secondary" onClick={close}>
          cancel
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
