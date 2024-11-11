"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
const TodoApp = () => {
  const { isOpen, openModal, closeModal } = useModal();
  console.log(isOpen);
  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <p>test modal functionality</p>
      </Modal>
    </div>
  );
};
export default TodoApp;
