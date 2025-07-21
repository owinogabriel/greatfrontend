import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import SharedCard from "../shared/SharedCard";
import { SubTitle, Title } from "../shared/Title";

// Testiomials
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

// frequent asked questions (faqs)
const faqs = [
  {
    question: "What types of images are available on your platform?",
    answer: "Our platform offers a diverse range of abstract images to suit various preference and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes."
  },
  {
    question: "How can I access and download images from your platform?",
    answer: "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks."
  },
  {
    question: "Do you offer free images, or is there a subscription required?",
    answer: "We provide both free and premium images on our platform, Users can explore a selection of free images without any subscription. For accessto our entire library and additional features, we offer subscription plans tailored to different user needs."
  },
  {
    question: "What payment methods do you accept for subscription?",
    answer: "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users."
  },
  {
    question: "Can I cancel or modify my subscription at anytime?",
    answer: "Yes, absolutely, You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences."
  },
  {
    question: "How frequently do you update your image collection?",
    answer: "We regulerly update our image collection with frsh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform."
  },
]

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
        {/* FAQ */}
        <div className="flex flex-col items-center mt-6 gap-4">
          <SubTitle>Frequently asked questions</SubTitle>
          <Paragraph className="font-semibold">Choose any question you need</Paragraph>
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Insert a horizontal line between FAQ items, but skip before the first */}
              {index !== 6 && (
                <hr className="mt-6 w-full border-t border-gray-600" />
              )}

              {/* The FAQ question */}
              <p className="text-lg font-semibold text-center md:text-left mt-2">
                {faq.question}
              </p>

              {/* The FAQ answer */}
              {faq.answer && (
                <span className="text-gray-500 text-xs  md:text-lg text-start md:text-left block mt-4">
                  {faq.answer}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
