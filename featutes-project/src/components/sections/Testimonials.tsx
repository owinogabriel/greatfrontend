import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import SharedCard from "../shared/SharedCard";
import { SubTitle, Title } from "../shared/Title";

const testimonialData = [
  {
    avatar: "/assets/images/sarah.jpg",
    name: "Sarah Dole",
    email: "@sarahdole",
    paragraph:
      "I've been searching for high-quality abstract images for my designs projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
  {
    avatar: "/assets/images/jake.jpg",
    name: "Jake Johnson",
    email: "@jakejohnson",
    paragraph:
      "From corporate presentations to personal projects, the abastract images on his patform have added a touch of elegance and sophistication to everything I create.",
  },
  {
    avatar: "/assets/images/marcus.jpg",
    name: "Marcus Thompson",
    email: "michael@email.com",
    paragraph:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!.",
  },
  {
    avatar: "/assets/images/john.jpg",
    name: "John Appleseed",
    email: "@johnappleseed",
    paragraph:
      "As an artist, finding inspiration is crucial. This plartform has become my go-to source for unique abstract images that ignite my creativity like never before. ",
  },
  {
    avatar: "/assets/images/igor.jpg",
    name: "Igor Stravinsky",
    email: "@igorstrav",
    paragraph:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work.",
  },
  {
    avatar: "/assets/images/olivier.jpg",
    name: "Olivier Neverloved",
    email: "@oliviernever",
    paragraph:
      "I appreciate how user-friendly the plartform is. Browsing, downloading, and managing my image library couldn't be easier.",
  },
  {
    avatar: "/assets/images/jean.jpg",
    name: "Jean Gray",
    email: "@jeniic",
    paragraph:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
  },
  {
    avatar: "/assets/images/declan.jpg",
    name: "Declan Rice",
    email: "@drice",
    paragraph:
      "I'm amazed by the attention to detail in every image on this platform, it's clear that a lot of thought and creativity goest into curation the collecton.",
  },
  {
    avatar: "/assets/images/mark.jpg",
    name: "Mark Dennis",
    email: "@marked",
    paragraph:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction truly commendable.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-2 justify-center items-center mb-12">
          <Title>Testimonials</Title>
          <SubTitle>Countless users, countless smiles</SubTitle>
          <Paragraph className="max-w-[25ch] md:max-w-2xl">
            Explore our community's journey and discover why satisfaction
            defines us.
          </Paragraph>
        </div>

        {/* Testimonial Cards set to Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <SharedCard
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              email={testimonial.email}
              paragraph={testimonial.paragraph}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
