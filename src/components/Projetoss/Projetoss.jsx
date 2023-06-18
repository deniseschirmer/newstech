import { projectData } from "../../data/projectData";
import "./projetoss.css";

const Projetoss = () => {
  return (
    <section className="projeto-container">
      <h1 className="projeto-title">Projetos</h1>
      <p className="projeto-paragrafo">
        Descubra como nosso projetos digitais podem ajudá-lo a alcançar seus
        objetivo de negócios online.
      </p>
      <div className="projeto-row">
        {projectData.map((item) => {
          return (
            <div key={item.id}>
              <div className="projeto-col">
                <div className="projeto-card">
                  <img
                    className="projeto-card_imagem"
                    src={item.image}
                    alt={item.alt}
                  />
                  <h2 className="projeto-card_title">{item.title}</h2>
                  <a
                    className="projeto-card_paragrafo"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visite a página
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </section>
  );
};

export default Projetoss;
