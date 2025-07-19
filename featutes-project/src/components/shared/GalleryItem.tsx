import { Paragraph } from "./Paragraph";
import { SubTitle } from "./Title";

export const GalleryItem = ({
  reversed = true,
  imageSrc,
  children,
}: {
  reversed?: boolean;
  imageSrc: string;
  children: React.ReactNode;
}) => {
  const layoutClass = reversed ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={`flex flex-col w-full ${layoutClass} justify-between gap-4 md:mt-4 mb-6 items-center lg:items-start overflow-x-hidden`}
    >
      {/* Text content — centered on small, left on large */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
        {children}
      </div>

      {/* Image — centered on small, right-aligned on large */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] w-[90%] sm:w-full max-w-full">
          <img alt="class support" src={imageSrc} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export const ContentContainer = ({
  title,
  description,
  className = "",
  reversed = false,
}: {
  title: string;
  description: string;
  className?: string;
  reversed?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col justify-items-start items-start md:pl-7 md:gap-2 md:p-3 ${className}`}
    >
      <SubTitle className="text-lg font-medium mt-2 md:text-lg ">
        {title}
      </SubTitle>
      <Paragraph className={` ${reversed ? "" : ""} text-start lg:text-left`}>
        {description}
      </Paragraph>
    </div>
  );
};
