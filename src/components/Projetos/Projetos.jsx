import "./projetos.css";
import card from "../../assets/card.png";

const Projetos = () => {
  return (
    <section className="projeto-container">
      <h1 className="projeto-title">Projetos</h1>
      <p className="projeto-paragrafo__p">
        Descubra como nosso projetos digitais podem ajudá-lo a alcançar seus
        objetivo de negócios online.
      </p>

      <div className="projeto-row">
        <div className="projeto-col">
          <div className="projeto-card">
            <img
              className="projeto-card_imagem"
              src={card}
              alt="Imagem do computador"
            />
            <h2 className="projeto-card_title">Nome do Site / Projeto</h2>
            <p className="projeto-card_paragrafo">Visite a página</p>
          </div>
        </div>
        <div className="projeto-col">
          <div className="projeto-card">
            <img
              className="projeto-card_imagem"
              src={card}
              alt="Imagem do computador"
            />
            <h2>Nome do Site / Projeto</h2>
            <p>Visite a página</p>
          </div>
        </div>
        <div className="projeto-col">
          <div className="projeto-card">
            <img
              className="projeto-card_imagem"
              src={card}
              alt="Imagem do computador"
            />
            <h2>Nome do Site / Projeto</h2>
            <p>Visite a página</p>
          </div>
        </div>
        <div className="projeto-col">
          <div className="projeto-card">
            <img
              className="projeto-card_imagem"
              src={card}
              alt="Imagem do computador"
            />
            <h2>Nome do Site / Projeto</h2>
            <p>Visite a página</p>
          </div>
        </div>
        <div className="projeto-col">
          <div className="projeto-card">
            <img
              className="projeto-card_imagem"
              src={card}
              alt="Imagem do computador"
            />
            <h2>Nome do Site / Projeto</h2>
            <p>Visite a página</p>
          </div>
        </div>
        <div className="projeto-col">
          <div className="projeto-card">
            <img
              className="projeto-card_imagem"
              src={card}
              alt="Imagem do computador"
            />
            <h2>Nome do Site / Projeto</h2>
            <p>Visite a página</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
