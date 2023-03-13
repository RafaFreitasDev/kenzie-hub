import { StyledLogin } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export function Login() {
  const { userLogin } = useContext(UserContext);

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  function registerButton() {
    navigate("/cadastro");
  }

  const [isHidden, setIsHidden] = useState(true);

  function submit(formData){
    userLogin(formData)
    reset()
  }

  return (
    <StyledLogin>
      <h2>Kenzie Hub</h2>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <label htmlFor="password">Senha</label>
        <div>
          <input
            id="password"
            type={isHidden ? "password" : "text"}
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <FaEye className="eye" onClick={() => setIsHidden(!isHidden)} />
        </div>
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <button className="register" type="button" onClick={registerButton}>
          Cadastrar
        </button>
      </form>
    </StyledLogin>
  );
}
// }
