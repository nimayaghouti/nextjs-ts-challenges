import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "@/hooks/useClickOutside";
import CloseIcon from "@/assets/svg/CloseIcon";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const [isClient, setIsClient] = useState<boolean>(false);

  useClickOutside({ ref: modalRef, callback: closeModal });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  if (!isClient) return null;

  return createPortal(
    isVisible && (
      <div
        className={`fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 ${
          isOpen ? "animate-inAnimation" : "animate-outAnimation"
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div
          ref={modalRef}
          className={`relative flex flex-col bg-white rounded-lg max-w-lg w-11/12 p-8 gap-8 ${
            isOpen ? "animate-scaleInAnimation" : "animate-scaleOutAnimation"
          }`}
        >
          <span
            className="absolute right-0 top-[-10px] translate-y-[-100%] w-9 h-9 bg-white text-slate-900 rounded cursor-pointer hover:bg-red-600 hover:text-white [&_*]:h-full [&_*]:w-full"
            onClick={closeModal}
          >
            <CloseIcon />
          </span>
          {children}
        </div>
      </div>
    ),
    document.getElementById("overlay") as HTMLElement
  );
};

export default Modal;
