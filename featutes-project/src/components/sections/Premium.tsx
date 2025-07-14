
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { SubTitle, Title } from "../shared/Title";

const Premium = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center gap-3">
          <Title>Premium abstract images</Title>
          <SubTitle>Easy access to top quality images</SubTitle>
          <Paragraph>In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentattion excellence.</Paragraph>
        </div>
      </Container>
    </div>
  );
};

export default Premium;
