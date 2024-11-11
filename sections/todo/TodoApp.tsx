"use client";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
const TodoApp = () => {
  const { isOpen, openModal, closeModal } = useModal();
  console.log(isOpen);
  return (
    <div>
      <button
        className="p-2 bg-slate-900 text-white rounded-md"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <p>test modal functionality</p>
      </Modal>
    </div>
  );
};
export default TodoApp;
