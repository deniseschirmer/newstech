import Hero from "../components/Hero/Hero";
import { Sobre } from "../components/Sobre/Sobre";
import Footer from "../components/Footer/Footer";
// import Projetos from "../components/Projetos/Projetos";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Sobre />
      {/* <Projetos /> */}
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
