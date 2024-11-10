import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (event: React.MouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const closeModal = (): void => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

export default useModal;
