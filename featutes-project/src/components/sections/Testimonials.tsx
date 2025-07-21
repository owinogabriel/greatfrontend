import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { SubTitle, Title } from "../shared/Title"


const Testimonials = () => {
  return (
    <div>
<Container>
  <div className="flex flex-col gap-2 justify-center items-center">
    <Title>Testimonials</Title>
    <SubTitle>Countelss users, countless smiles</SubTitle>
    <Paragraph className="max-w-[25ch] md:max-w-2xl">Explore our commnities journey and discorver why satisfaction defines us.</Paragraph>
  </div>
</Container>
    </div>
  )
}

export default Testimonials