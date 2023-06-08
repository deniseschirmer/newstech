import Hero from "../components/Hero/Hero";
import { Sobre } from "../components/Sobre/Sobre";
import Footer from "../components/Footer/Footer";
import Projetos from "../components/Projetos/Projetos";

const Home = () => {
  return (
    <>
      <Hero />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  );
};

export default Home;
