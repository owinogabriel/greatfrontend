import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { SubTitle } from "../shared/Title";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start gap-6">
              <SubTitle>Talk to our team</SubTitle>

              <Paragraph className="text-start text-[20px] max-w-[30ch] md:max-w-[50ch]">
                We're committed to delivering the supports you require to make
                your experience as smooth as possible.
              </Paragraph>

              <div className="flex flex-col font-medium items-start gap-2">
                <Paragraph className="text-start  max-w-[20ch]">
                  123 Maples Street, Springfield, IL, USA
                </Paragraph>
                <Paragraph className="text-start ">+1 (650) 555-0198</Paragraph>
                <Paragraph className="text-start">
                  hello@abstractly.com
                </Paragraph>
              </div>
            </div>
          </div>
          <div>
            <form
              className="bg-[#ffffff] space-y-6 mt-6 p-8 rounded shadow-md shadow-gray-500 w-full "
              noValidate
            >
              <div className="flex flex-col md:flex-row gap-6">
                   <div>
                <label htmlFor="text">Name</label>
                <input
                  type="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-400 rounded bg-[#f1f4fa] text-gray-950 placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-400 rounded bg-[#f1f4fa] text-gray-950 placeholder:text-gray-500"
                />
              </div>
              </div>
           
              <div>
                <label htmlFor="email">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-400 rounded bg-[#f1f4fa] text-gray-950 placeholder:text-gray-500"
                />
              </div>
              <Button className="w-full mt-4 bg-[#4e45cf] text-[#FFFFFF]">Submit</Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
