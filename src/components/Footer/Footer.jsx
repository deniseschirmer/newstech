import "./footer.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer-container">
      <h4 className="footer-logo">Newstech 2023</h4>

        <div className="footer-midias">

            <FaEnvelope className="icone-Email"/>
            <FaWhatsapp className="icone-Whastapp"/>
            <FaLinkedin className="icone-Linkedin"/>
            <FaGithub className="icone-Github"/>
        </div>


    </footer>
  );
};

export default Footer;
