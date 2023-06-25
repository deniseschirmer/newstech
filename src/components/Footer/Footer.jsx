import "./footer.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h4 className="footer-logo">Newstech 2023</h4>

      <div className="footer-midias">
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <FaEnvelope className="icone" />
        </Link>
        <a
          href="https://www.linkedin.com/company/newstech1/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icone" />
        </a>
        <a
          href="https://github.com/Newstech01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icone" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
