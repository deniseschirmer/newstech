import { useState } from "react";
import Input from "../Form/Input";
import "./contact.css";
import Select from "../Form/select";
import TextArea from "../Form/TextArea";
import Button from "../Form/Button";
import boy from "../../assets/boy.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    window.alert("Email enviado com sucesso!");
  };

  const serviceOptions = [
    {
      value: "placeholder",
      label: "",
      selected: false,
    },
    {
      value: "ecommerce",
      label: "E-commerce",
      selected: false,
    },
    {
      value: "site",
      label: "Site",
      selected: false,
    },
    {
      value: "app",
      label: "App",
      selected: false,
    },
  ];

  return (
    <div className="contact-container">
      <div className="form-container">
        <h1 className="form-title">Contato</h1>
        <p className="form-text">
          Queremos ouvir de você. Preencha o formulário e envie-nos uma
          <br />
          mensagem sobre o que você precisa para impulsionar o seu negócio.
        </p>
        <div className="form">
          <Input title="Nome" setState={setName} value={name} />
          <Input title="Email" setState={setEmail} value={email} />
          <Input title="Telefone" setState={setPhone} value={phone} />
          <Select
            title="Serviços"
            options={serviceOptions}
            value={services}
            setState={setServices}
          />
          <TextArea value={message} setState={setMessage} />

          <Button onClick={() => handleSubmit()}>ENVIAR</Button>
        </div>
      </div>
      <div className="contact-box">
        <img className="contact-box__image" src={boy} alt="imagem menino" />
        <p className="contact-box__text">
          Conte a sua história. Queremos saber mais sobre a sua ideia e como
          podemos ajudá-lo a alcançar seus objetivos online.
        </p>
      </div>
    </div>
  );
};

export default Contact;
