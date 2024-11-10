import { Todo, Column } from "@/app/table-pagination/page";

interface Props {
  pageData: Todo[];
  columns: Column[];
}

const TableContent = ({ pageData, columns }: Props) => {
  return (
    <table className="w-full max-w-[1200px] text-center">
      <thead>
        <tr className="flex text-white bg-slate-900 rounded-lg">
          {columns.map((col, index) => (
            <td
              key={index}
              className="flex justify-center items-center flex-1 p-2.5 h-14"
            >
              {col.title}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {pageData.map((data) => (
          <tr
            className="flex justify-center text-slate-900 even:bg-white rounded-lg ث"
            key={data.id}
          >
            {columns.map((col, index) => (
              <td
                key={index}
                className="flex justify-center items-center flex-1 p-2.5 h-14 "
              >
                {data[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
