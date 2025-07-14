interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return (  
    <p className={`text-2xl justify-center text-center text-[#828282] md:text-3xl pt-2 ${className}`}>
      {children}
    </p>
  )
};
