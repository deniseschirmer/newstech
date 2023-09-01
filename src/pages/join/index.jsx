import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import CoffeeDoddle from "../../assets/CoffeeDoddle.png";
import "./join.css";

const Join = () => {
  return (
    <div>
      <Navbar />
      <section id="join" className="join-container">
        <div className="join-box">
          <h1 className="join-title">Junte-se a nós</h1>
          <p className="join-text">
            Nossa comunidade é formada por desenvolvedores e designers
            apaixonados por tecnologia e inovação. O objetivo é criar um
            ambiente colaborativo onde os membros possam compartilhar
            conhecimentos, trocar ideias e trabalhar juntos em projetos
            desafiadores.
          </p>
          <p className="join-text">
            Acreditamos que a diversidade é fundamental para a criatividade, por
            isso, nossa comunidade é aberta a todos os tipos de perfis e
            habilidades.
          </p>
          <p className="join-text">
            Se você é da área de tecnologia e quer conectar com outros
            profissionais e expandir seus horizontes, junte-se a nós e faça
            parte de uma comunidade vibrante e inspiradora.
          </p>
          <div className="join-btn__box">
            <button className="join-btn">
              <a
                className="join-btn_text"
                href="https://discord.gg/ErheYyCB"
                target="_blank"
              >
                Comunidade Discord
              </a>
            </button>
          </div>
        </div>
        <div className="join-box_image">
          <img
            className="join-image"
            src={CoffeeDoddle}
            alt="Homem carregando uma xícara de café"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Join;
