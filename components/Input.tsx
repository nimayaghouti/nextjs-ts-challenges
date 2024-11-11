// Input.tsx
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: { message?: string };
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...otherProps }, ref) => {
    return (
      <div
        className={`flex flex-col justify-center items-stretch gap-1 ${className}`}
      >
        {label && (
          <label className="text-slate-800 text-lg" htmlFor={otherProps.id}>
            {label}
          </label>
        )}
        <input
          className="p-4 rounded-lg h-full bg-slate-200 focus:outline-2 focus:outline-slate-600"
          ref={ref}
          {...otherProps}
        />
        {error && <div className="text-red-500">{error.message}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
