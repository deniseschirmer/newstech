import { projectData } from "../../data/projectData";
import "./Project.css";

const Projetos = () => {
  return (
    <section id="project" className="project-section">
      <h1 className="project-title">Projetos</h1>
      <p className="project-text">
        Descubra como nosso projetos digitais podem ajudá-lo a alcançar seus
        objetivo de negócios online.
      </p>
      <div className="project-container">
        {projectData.map((item) => {
          return (
            <div key={item.id}>
              <div className="project-box">
                <div className="project-card">
                  <img
                    className="project-card_imagem"
                    src={item.image}
                    alt={item.alt}
                  />
                  <div className="project-card_info">
                    <h2 className="project-card_title">{item.title}</h2>
                    <a
                      className="project-card_text"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visite a página
                    </a>
                  </div>
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

export default Projetos;
