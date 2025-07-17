import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { SubTitle, Title } from "../shared/Title";
import design from "/assets/images/design.jpg";
const features = [
  {
    text: "5K resolution support",
    description:
      "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.",
  },
  {
    text: "From water to glass",
    description:
      "We offer a wide array of abstractions, ranging from water to glass and encompassing various styles including 3D and vector.",
  },
  {
    text: "Portrait or lanscape",
    description:
      "Effortlessly adapt you images for any platform - whether it's a stunning wallpaper or captivation Instagram reels and stories.",
  },
];

const Designs = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center gap-3">
          <Title>High quality images</Title>
          <SubTitle>For designers, by designers</SubTitle>
          <Paragraph className="font-medium">
            Unleash boundless creativity with a large repository of images
            optimized for designers
          </Paragraph>
          <div className="flex flex-col md:flex-row gap-6 mt-5">
            <div className="flex-2 flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col text-start justify-start"
                >
                  <h2 className="text-lg font-semibold mt-4">{feature.text}</h2>
                  <p className="mt-2 max-w-[50ch] text-[#828282]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex-2 flex items-start ">
              <img
                src={design}
                alt="Design abstract"
                className="w-full h-40 md:h-[45ch] md:p-6 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 gap-2">
            <Title>Best-in-class support</Title>
            <SubTitle>Convince and licensing that empowers</SubTitle>
            <Paragraph>In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.</Paragraph>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Designs;
