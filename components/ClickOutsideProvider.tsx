"use client";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

interface ClickOutsideProps {
  callback: () => void;
  children: React.ReactNode;
}

const ClickOutsideProvider = ({ callback, children }: ClickOutsideProps) => {
  const clickOutsideRef = useRef<HTMLDivElement>(null);

  useClickOutside({ ref: clickOutsideRef, callback: callback });

  return <div ref={clickOutsideRef}>{children}</div>;
};
export default ClickOutsideProvider;
