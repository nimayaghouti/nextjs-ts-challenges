import { useEffect } from "react";

type UseClickOutsideProps = {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
};

const useClickOutside = ({ ref, callback }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
