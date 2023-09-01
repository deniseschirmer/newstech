import Hero from "../components/Hero/Hero";
import Project from "../components/Project/Project";
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
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
