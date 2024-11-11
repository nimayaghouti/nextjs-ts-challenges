interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  isDisabled?: boolean;
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
  maxWidth?: string;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  isLoading = false,
  isDisabled = false,
  prependIcon,
  appendIcon,
  variant = "primary",
  ...otherProps
}: ButtonProps) => {
  const buttonVariantsMap = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-700 focus:border-black active:bg-slate-950",
    secondary:
      "bg-slate-300 text-slate-900 hover:bg-slate-400 focus:border-slate-600 active:bg-slate-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center capitalize gap-3 px-4 py-2 rounded-lg h-12 border-none cursor-pointer transition duration-500 ${buttonVariantsMap[variant]} ${className}`}
      disabled={isDisabled || isLoading}
      {...otherProps}
    >
      {isLoading ? (
        <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
      ) : (
        <>
          {prependIcon && (
            <span className="flex justify-center items-center">
              {prependIcon}
            </span>
          )}
          <span>{children}</span>
          {appendIcon && (
            <span className="flex justify-center items-center">
              {appendIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
