import { useRef } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="header">
        <h3 className="title">NEWSTECH</h3>
        <nav ref={navRef} className="navbar">
          <a href="/#">Sobre</a>
          <a href="/#">Projetos</a>
          <a href="/#">Junte-se a nós</a>
          <a href="/#">Contato</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      {/* <header className="header">
        <h3 className="title">NEWSTECH</h3>
        <nav className="navbar">
          <a href="/#">Sobre</a>
          <a href="/#">Projetos</a>
          <a href="/#">Junte-se a nós</a>
          <a href="/#">
            <button>Contato</button>
          </a>
        </nav>
      </header> */}
    </>
  );
}
