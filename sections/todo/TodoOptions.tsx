import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";

interface TodoOptionsProps {
  status: string;
  onStatusChange: (newStatus: string) => void;
}

const TodoOptions = ({ status, onStatusChange }: TodoOptionsProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex items-center justify-between h-16 w-full">
        <Button type="button" className="w-full max-w-fit" onClick={openModal}>
          add task
        </Button>
        <select
          className="p-3 cursor-pointer rounded-md bg-slate-300 text-slate-900 font-medium"
          value={status}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onStatusChange(event.target.value)
          }
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <p>todoform</p>
      </Modal>
    </>
  );
};
export default TodoOptions;
