import { Layout } from "./components/Layout";
import Hero from "./components/sections/Hero";
import { Premium } from "./components/sections/Premium";

function App() {
  return (
    <Layout title="Feature | Abstractly">
      <Hero />
      <Premium />
    </Layout>
  );
}

export default App;
