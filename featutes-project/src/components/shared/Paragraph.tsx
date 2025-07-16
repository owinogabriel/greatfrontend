import type { ParagraphProps } from "../../interface";

export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (
    <p
      className={`text-sm justify-center text-center max-w-2xl text-[#828282] md:text-lg pt-3 ${className}`}
    >
      {children}
    </p>
  );
};
