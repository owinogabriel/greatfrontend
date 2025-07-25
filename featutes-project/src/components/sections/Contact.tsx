import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { SubTitle } from "../shared/Title";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Info Section */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start gap-6">
              <SubTitle>Talk to our team</SubTitle>

              <Paragraph className="text-start text-[20px] max-w-[30ch] md:max-w-[50ch]">
                We're committed to delivering the supports you require to make
                your experience as smooth as possible.
              </Paragraph>

              <div className="flex flex-col font-medium items-start gap-2">
                <Paragraph className="text-start max-w-[20ch]">
                  123 Maples Street, Springfield, IL, USA
                </Paragraph>
                <Paragraph className="text-start">+1 (650) 555-0198</Paragraph>
                <Paragraph className="text-start">
                  hello@abstractly.com
                </Paragraph>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <form
            noValidate
            className=" mt-6 p-8 bg-white rounded shadow-md shadow-gray-500 mb-2 space-y-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-1/2 max-w-xs">
                <label
                  htmlFor="name"
                  className="mb-2 font-medium text-gray-700 text-sm"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md bg-[#f1f4fa] text-gray-950 placeholder:text-gray-500 text-sm"
                />
              </div>

              <div className="flex flex-col w-full md:w-1/2 max-w-xs">
                <label
                  htmlFor="email"
                  className="mb-2 font-medium text-gray-700 text-sm"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md bg-[#f1f4fa] text-gray-950 placeholder:text-gray-500 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-400 rounded bg-[#f1f4fa] text-gray-950 placeholder:text-gray-500 md:max-w-2xl"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full mt-4 bg-[#4e45cf] text-white">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
