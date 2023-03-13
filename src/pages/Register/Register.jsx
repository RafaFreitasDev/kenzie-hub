import { StyledRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { RegisterInput } from "../../components/RegisterInput/RegisterInput";
import { RegisterSelect } from "../../components/RegisterSelect/RegisterSelect";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const formSchema = yup
  .object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/([a-z])/, "Deve conter ao menos uma letra menúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo um caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), "Deve ser igual a senha"])
      .required("Confirmação obrigatória"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
  })
  .required();

export function Register() {
  const { userRegister } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function backButton() {
    navigate("/");
  }


  function submit(formData){
    userRegister(formData)
  }

  return (
    <StyledRegister>
      <div>
        <h2>Kenzie Hub</h2>
        <button onClick={backButton}>Voltar</button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Crie sua conta</h3>
        <p>Rápido e grátis, vamos nessa</p>
        <RegisterInput
          label="Nome"
          id="name"
          type="text"
          register={register}
          placeholder="Digite seu nome"
          error={errors.name?.message}
        />
        <RegisterInput
          label="Email"
          id="email"
          type="text"
          register={register}
          placeholder="Digite seu email"
          error={errors.email?.message}
        />
        <RegisterInput
          label="Senha"
          id="password"
          type="password"
          register={register}
          placeholder="Digite sua senha"
          error={errors.password?.message}
        />
        <RegisterInput
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          register={register}
          placeholder="Confirme sua senha"
          error={errors.confirmPassword?.message}
        />
        <RegisterInput
          label="Bio"
          id="bio"
          type="text"
          register={register}
          placeholder="Fale sobre você"
          error={errors.bio?.message}
        />
        <RegisterInput
          label="Contato"
          id="contact"
          type="text"
          register={register}
          placeholder="Opção de contato"
          error={errors.contact?.message}
        />
        <RegisterSelect
          label="Selecionar módulo"
          id="course_module"
          register={register}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </StyledRegister>
  );
}
