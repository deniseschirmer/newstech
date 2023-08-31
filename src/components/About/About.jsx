import menbox from "../../assets/menbox.png";
import "./about.css";

export const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-box">
        <h1 className="about-title">Sobre</h1>
        <p className="about-text">
          Na Newstech oferecemos serviços especializados de desenvolvimento de
          websites voltados para empreendedores. Sabemos o quão crucial é ter
          uma presença online impactante nos dias de hoje, e estamos aqui para
          ajudar você a alcançar seus objetivos.
        </p>
        <p className="about-text">
          Pensamos fora da caixa, nossa equipe de talentosos desenvolvedores
          está pronta para criar websites sob medida, que reflitam a essência do
          seu negócio e atendam às suas necessidades específicas. Combinamos
          design atraente, funcionalidades avançadas e usabilidade intuitiva
          para entregar uma experiência online excepcional para seus clientes.
        </p>
      </div>
      <div className="about-box_imagem">
        <img className="menbox-img" src={menbox} alt="Homem em uma caixa" />
      </div>
    </section>
  );
};
