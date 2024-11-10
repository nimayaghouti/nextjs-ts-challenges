import { Todo, Column } from "@/app/table-pagination/page";

interface Props {
  data: Todo[];
  itemsPerPage: number;
  columns: Column[];
}

const Table = ({ data, itemsPerPage, columns }: Props) => {
  console.log(data, itemsPerPage, columns);
  return <div>Table</div>;
};
export default Table;
