// Import shared components
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { SubTitle, Title } from "../shared/Title";

// Data array containing abstract image features
const abstract: {
  text: string;
  description: string;
}[] = [
  {
    text: "Infinite Download",
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    text: "Purely Handcrafted",
    description:
      "NO AI, no generic images. Crafted from various chemical, fabrics, clouds, or even particles as small as dust.",
  },
  {
    text: "All are under licensed",
    description:
      "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy(such as painting or prints on papy).",
  },
  {
    text:"Cancel Anytime",
    description:"Subscribe at your own pace, and cancel when you feel it's enough."
  },
  {
    text: "Empowering For Team",
    description:
      "We support multiples seats at once, requiring only a single payment.",
  },
  {
    text: "No Limitations",
    description:
      "Use as many as you want, from Dribble presentation to PowerPoint presantations.",
  },
];

// defining props for AbstractGrid component
interface AbstractProps {
  title: string;
  description: string;
}

// Individual grid item component for displaying feature cards
const AbstractGrid = ({ title, description }: AbstractProps) => {
  return (
    <div className="text-center pt-4 flex flex-col items-center ">
      {/* Feature title */}
      <h1 className="text-lg mt-2.5 font-medium md:text-2xl">{title}</h1>
      {/* Feature description with text styling and character width limit */}
      <p className="text-xm md:text-lg font-medium text-[#828282] w-full md:max-w-2xl mt-2">{description}</p>
    </div>
  );
};

export const Premium = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center gap-3">
          <Title>Premium abstract images</Title>
          <SubTitle>Easy access to top quality images</SubTitle>
          <Paragraph>
            In a world where storytelling constantly evolves, we lead with
            groundbreaking images designed for your presentattion excellence.
          </Paragraph>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 md:gap-[4rem] w-full max-w-6xl">
            {abstract.map((abstracts, index) => (
              <AbstractGrid
                key={index}
                title={abstracts.text}
                description={abstracts.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Premium;