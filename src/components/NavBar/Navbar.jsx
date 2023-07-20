import { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const url = window.location.href;

    if (url.includes("/#sobre")) {
      const element = document.getElementById("sobre");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (url.includes("/#projetos")) {
      const element = document.getElementById("projetos");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (url.includes("/#contact")) {
      const element = document.getElementById("contact");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleNavigation = (url) => {
    const element = document.getElementById(url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showNavbar = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <NavLink className="title" to="/" activeClassName="is-active" exact>
          NEWSTECH
        </NavLink>
        <nav ref={navRef} className={`navbar ${show && "responsive_nav"}`}>
          <Link to="/#sobre" onClick={() => handleNavigation("sobre")}>
            Sobre
          </Link>
          <Link to="/#projetos" onClick={() => handleNavigation("projetos")}>
            Projetos
          </Link>

          <Link to="/join">Junte-se a nós</Link>

          <Link to="/#contact" onClick={() => handleNavigation("contact")}>
            Contato
          </Link>

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
