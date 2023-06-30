import { useRef } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="header">
        <NavLink className="title" to="/" activeClassName="is-active" exact>
          NEWSTECH
        </NavLink>
        {/* <h3 className="title">NEWSTECH</h3> */}
        <nav ref={navRef} className="navbar">
          {/* <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <FaEnvelope className="icone" />
          </Link>
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Sobre
          </Link> */}
          <Link to="Sobre" spy={true} smooth={true} offset={50} duration={500}>
            Sobre
          </Link>
          <Link
            to="Projetos"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projetos
          </Link>

          <a href="/join">Junte-se a nós</a>

          {/* <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contato
          </Link> */}

          <a href="/#">Contato</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}
