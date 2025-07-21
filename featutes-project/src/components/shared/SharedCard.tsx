import { Paragraph } from "../shared/Paragraph";
import { SubTitle, Title } from "../shared/Title";

interface SharedCardProps {
  avatar: string;
  name: string;
  email: string;
  paragraph: string;
}

const SharedCard: React.FC<SharedCardProps> = ({
  avatar,
  name,
  email,
  paragraph,
}) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-md p-4 w-full">
      {/* Header containing Avatar and Names */}
      <div className="flex items-center gap-4 mb-4 ">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <SubTitle className="text-lg font-medium md:text-lg">{name}</SubTitle>
          <Title className="text-sm font-light text-gray-600">{email}</Title>
        </div>
      </div>
      <Paragraph className="text-[#5A5A5A] text-sm leading-relaxed text-start">
        {paragraph}
      </Paragraph>
    </div>
  );
};

export default SharedCard;
