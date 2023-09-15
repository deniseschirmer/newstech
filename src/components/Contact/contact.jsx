import Input from "../Form/Input";
import Select from "../Form/select";
import TextArea from "../Form/TextArea";
import Button from "../Form/Button";
import boy from "../../assets/boy.png";
import { IoIosWarning } from "react-icons/io";
import { Controller, useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

import "./contact.css";

const schema = yup.object().shape({
  nome: yup.string().required("Por favor informe seu nome."),
  email: yup
    .string()
    .email("Email inválido")
    .required("Informe um email para entrarmos em contato."),
  telefone: yup
    .string()
    .matches(/^\d+$/, {
      message: "Telefone inválido.",
      excludeEmptyString: true,
    })
    .min(10, "Telefone deve ter no mínimo 10 dígitos.")
    .max(15, "Telefone deve ter no máximo 15 dígitos."),
  servicos: yup.string().required("Escolha um serviço para melhor atende-ló."),
  mensagem: yup
    .string()
    .required("Deixe uma mensagem para entendermos seu negócio."),
});

const Contact = () => {
  const defaultValues = {
    nome: "",
    email: "",
    telefone: "",
    servicos: "",
    mensagem: "",
  };

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const { errors } = useFormState({ control });

  const sendEmail = async (data) => {
    const emailjsApiKey = import.meta.env.VITE_APP_EMAILJS_API_KEY;
    try {
      const templateParams = {
        from_name: data.nome,
        from_email: data.email,
        from_phone: data.telefone,
        from_service: data.servicos,
        message: data.mensagem,
      };

      await emailjs.send(
        "service_guueder",
        "template_wlpkgq1",
        templateParams,
        emailjsApiKey
      );
      alert("Dados enviados com sucesso");
      reset();
      console.log("Form sent successfully");
    } catch (error) {
      console.log("error" + error);
    }
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
      <main className="form-container">
        <h1 className="form-title">Contato</h1>
        <p className="form-text">
          Queremos ouvir de você. Preencha o formulário e envie-nos uma
          <br />
          mensagem sobre o que você precisa para impulsionar o seu negócio.
        </p>
        <section className="form-box">
          <div className="contact-box">
            <img className="contact-box__image" src={boy} alt="imagem menino" />
            <p className="contact-box__text">
              Conte a sua história. Queremos saber mais sobre a sua idéia e como
              podemos ajudá-lo a alcançar seus objetivos online.
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit(sendEmail)}>
            <Controller
              control={control}
              name="nome"
              render={({ field }) => <Input title="Nome" {...field} />}
            />
            {errors.nome && (
              <span className="form-validation-msg">
                <IoIosWarning />
                {errors.nome.message}
              </span>
            )}
            <Controller
              control={control}
              name="email"
              render={({ field }) => <Input title="Email" {...field} />}
            />
            {errors.email && (
              <span className="form-validation-msg">
                <IoIosWarning />
                {errors.email.message}
              </span>
            )}
            <Controller
              control={control}
              name="telefone"
              render={({ field }) => <Input title="Telefone" {...field} />}
            />
            {errors.telefone && (
              <span className="form-validation-msg">
                <IoIosWarning />
                {errors.telefone.message}
              </span>
            )}
            <Controller
              control={control}
              name="servicos"
              render={({ field }) => (
                <Select title="Serviços" options={serviceOptions} {...field} />
              )}
            />
            {errors.servicos && (
              <span className="form-validation-msg">
                <IoIosWarning />
                {errors.servicos.message}
              </span>
            )}
            <Controller
              control={control}
              name="mensagem"
              render={({ field }) => <TextArea title="Mensagem" {...field} />}
            />
            {errors.mensagem && (
              <span className="form-validation-msg">
                <IoIosWarning />
                {errors.mensagem.message}
              </span>
            )}

            <Button type="submit">Enviar</Button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
