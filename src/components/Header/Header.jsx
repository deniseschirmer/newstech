import Navbar from "../NavBar/Navbar";
import "./header.css";
import hero from "../../assets/hero.png";

export default function Header() {
  return (
    <div>
      <Navbar />
      <section className="section">
        <h3 className="title"> Olá empreendedor</h3>
        <h1 className="main-title">Vamos expandir o seu negócio?</h1>
        <h2 className="sub-title">Torne ele online!</h2>
        <button className="b">COMECE AGORA</button>
        <img className="menbox" src={hero} alt="Homem em uma caixa" />
      </section>
    </div>
  );
}
