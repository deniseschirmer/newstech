import Navbar from "../NavBar/Navbar";
import "./header.css";
import hero from "../../assets/hero.png";

function Header() {
  return (
    <div>
      <Navbar />
      <section className="section">
        <h3> Olá empreendedor</h3>
        <h1>Vamos expandir o seu negócio?</h1>
        <h2>Torne ele online!</h2>
        <button>COMECE AGORA</button>
        <img src={hero} />
      </section>
    </div>
  );
}

export default Header;
