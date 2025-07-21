import { Layout } from "./components/Layout";
import Designs from "./components/sections/Designs";
import Hero from "./components/sections/Hero";
import { Premium } from "./components/sections/Premium";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <Layout title="Feature | Abstractly">
      <Hero />
      <Premium />
      <Designs />
      <Testimonials />
    </Layout>
  );
}

export default App;
