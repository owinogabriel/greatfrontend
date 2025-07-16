import type { ButtonProps } from "../../interface";

export const Button = ({ children, className, onclick }: ButtonProps) => {
  return (
    <button
      className={`font-semibold text-sm shadow-lg cursor-pointer px-6 py-2 rounded outline-none relative  overflow-hidden ${className}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};
