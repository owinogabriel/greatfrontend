import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { SubTitle } from "../shared/Title";

const Contact = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="flex flex-col  items-center ">
            <div className="flex flex-col items-start gap-6">
              <SubTitle>Talk to out team</SubTitle>
              <Paragraph className="text-start text-[20px] max-w-[30ch] md:max-w-[50ch]">
                We're committed to delivering the supports you require to make
                your experience as smooth as possible.
              </Paragraph>
              <Paragraph className="max-w-[20ch]">123 Maples Street, Springfield, IL, USA</Paragraph>
              <Paragraph>+1 (650) 555-0198</Paragraph>
              <Paragraph>hello@abstractly.com</Paragraph>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
