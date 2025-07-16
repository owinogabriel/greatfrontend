import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { SubTitle, Title } from "../shared/Title";

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
const Premium = () => {
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
        </div>
      </Container>
    </div>
  );
};

export default Premium;
