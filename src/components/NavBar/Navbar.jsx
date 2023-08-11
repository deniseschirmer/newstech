import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(!isMenuOpen);
    //console.log("clicou")
  };

  return (
    <>
      <header className="header">
        <NavLink className="title" to="/" activeClassName="is-active" exact>
          Newstech
        </NavLink>

        <nav ref={navRef} className="nav">
          <ul className={"collapsed" + (isMenuOpen ? "is-expanded" : "")}>
            <Link to="/#sobre" onClick={() => handleNavigation("sobre")}>
              <li>Sobre</li>
            </Link>
            <Link to="/#projetos" onClick={() => handleNavigation("projetos")}>
              <li>Projetos</li>
            </Link>

            <Link to="/join">
              <li>Junte-se a nós</li>
            </Link>

            <Link to="/#contact" onClick={() => handleNavigation("contact")}>
              <li>Contato</li>
            </Link>
          </ul>
          <button className="menu-btn" onClick={showNavbar}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>
    </>
  );
}
