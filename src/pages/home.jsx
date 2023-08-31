import Hero from "../components/Hero/Hero";
import Projetos from "../components/Projetos/Projetos";
import { About } from "../components/About/About";
import Footer from "../components/Footer/Footer";

import Contact from "../components/Contact/contact";
import Navbar from "../components/NavBar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projetos />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
