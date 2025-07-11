import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import prisma from "/assets/images/prism.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  // list defined as Arrays
  const featureDetails = [
    { id: 1, text: "Minimum 5K image resolution" },
    { id: 2, text: "Various format variants available" },
    { id: 3, text: "Retina displays support" },
  ];

  return (
    <div className="pt-24 md:pt-20 lg:pt-24">
      <Container>
        <div className="flex flex-col justify-center mt-4 items-center md:mt-6 md:space-x-7 md:flex-row">
          <div className="space-y-4">
            <h1 className="text-2xl max-w-[15ch] font-semibold md:text-6xl">
              Premium abstract images
            </h1>

            {/* List Items */}
            <ul className="text-[#b0adad] space-y-6 text-sm font-light max-w-[28ch] md:text-2xl">
              {/* mapping through the defined featureDetails Array */}
              {featureDetails.map((feature, index) => (
                <li key={index} className="flex items-center md:mt-6">
                  <div className="w-6 h-6 bg-[#EEF2FE] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#8185F3] text-xm"
                    />
                  </div>
                  <span className="">{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="lg:flex space-x-2 md:mt-5">
              <Button className="px-6 py-2 transform border-[#b6b1b1] border transition-transform hover:bg-amber-50 text-gray-700 bg-white">
                Learn more
              </Button>
              <Button className="px-6 py-2 transform tran text-sm sition-transform hover:bg-blue-200 text-cyan-50 bg-blue-700">
                See Pricing
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src={prisma}
            alt="Hero Image"
            className="w-full mt-4 md:w-[50%]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
