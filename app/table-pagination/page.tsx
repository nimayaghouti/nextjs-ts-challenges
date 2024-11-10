import instance from "@/services/apiService";
import Table from "@/sections/table/Table";
export interface Todo {
  id: number;
  title: string;
  completed: boolean | string;
  userId: number;
}

export interface Column {
  title: string;
  key: keyof Todo;
}

const TablePagination = async () => {
  try {
    const response = await instance.get("/todos");

    const todos: Todo[] = response.data.todos.map((todo: Todo) => ({
      ...todo,
      completed: todo.completed ? "Completed" : "Incomplete",
    }));

    const columns: Column[] = [
      { title: "Title", key: "title" },
      { title: "Status", key: "completed" },
      { title: "User Id", key: "userId" },
    ];

    return <Table data={todos} itemsPerPage={5} columns={columns} />;
  } catch (error) {
    console.error(error);
    return <div>Error loading data</div>;
  }
};

export default TablePagination;
