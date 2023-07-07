import { useState } from "react";
import Input from "../Form/Input";
import "./contact.css";
import Select from "../Form/select";
import TextArea from "../Form/TextArea";
import Button from "../Form/Button";
import boy from "../../assets/boy.png";
import { Controller, useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  nome: yup.string().required("nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigátorio"),
  telefone: yup
    .string()
    .matches(/^\d+$/, "Telefone inválido")
    .min(10, "Telefone deve ter no mínimo 10 dígitos")
    .max(15, "Telefone deve ter no máximo 15 dígitos"),
  serviços: yup.string().required("Serviço é obrigatório"),
  mensagem: yup.string().required("Mensagem é obrigatório"),
});

const Contact = () => {
  const defaultValues = {
    nome: null,
    email: null,
    telefone: null,
    serviços: null,
    mensagem: null,
  };
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const { errors } = useFormState({ control });

  const sendEmail = (data) => {
    console.log(data);
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
    <div id="contact" className="contact-container">
      <div className="form-container">
        <h1 className="form-title">Contato</h1>
        <p className="form-text">
          Queremos ouvir de você. Preencha o formulário e envie-nos uma
          <br />
          mensagem sobre o que você precisa para impulsionar o seu negócio.
        </p>
        <form className="form" onSubmit={handleSubmit(sendEmail)}>
          <Controller
            control={control}
            name="nome"
            render={({ field }) => <Input title="Nome" {...field} />}
          />
          {errors.nome && <span>{errors.nome.message}</span>}
          <Controller
            control={control}
            name="email"
            render={({ field }) => <Input title="Email" {...field} />}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Controller
            control={control}
            name="telefone"
            render={({ field }) => <Input title="Telefone" {...field} />}
          />
          {errors.telefone && <span>{errors.telefone.message}</span>}
          <Controller
            control={control}
            name="serviços"
            render={({ field }) => (
              <Select title="Serviços" options={serviceOptions} {...field} />
            )}
          />
          {errors.serviços && <span>{errors.serviços.message}</span>}
          <Controller
            control={control}
            name="mensagem"
            render={({ field }) => <TextArea {...field} />}
          />
          {errors.mensagem && <span>{errors.mensagem.message}</span>}

          <Button type="submit">ENVIAR</Button>
        </form>
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
