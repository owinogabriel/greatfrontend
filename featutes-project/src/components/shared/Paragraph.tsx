interface ParagraphProp {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className = "" }: ParagraphProp) => {
  return (  
    <p className={`text-2xl justify-center text-center text-[#828282] md:text-lg ${className}`}>
      {children}
    </p>
  )
};
