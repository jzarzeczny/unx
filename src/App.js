import { GlobalStyle } from "./components/GlobalStyle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import { Layout } from "./components/styled/Layout.styled";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Header />
      <Hero />
      <Product />
    </Layout>
  );
}

export default App;
