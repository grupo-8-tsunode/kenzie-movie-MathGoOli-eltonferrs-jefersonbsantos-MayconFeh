import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { TypeResgisterFormValue, registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { RegisterStyled } from "./style";
import Logo from "../../assets/kenziemovie.svg";

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeResgisterFormValue>({
    resolver: zodResolver(registerSchema),
  });

  const { registerNewuser } = useContext(UserContext);

  const registerUser: SubmitHandler<TypeResgisterFormValue> = (data) => {
    registerNewuser(data);
    reset();
  };

  return (
    <RegisterStyled>
      <header>
        <nav className="nav__container">
          <img src={Logo} alt="" />
          <div>
            <Link to={"/register"} className="signUp__button">
              Cadastre-se
            </Link>
            <Link to={"/login"} className="signIn__button">
              Entrar
            </Link>
          </div>
        </nav>
      </header>
      <div>
        <div>
          <h2>Cadastro</h2>
          <p>Preencha os campos para cadastrar-se</p>
        </div>
        <button>Voltar</button>
      </div>
      <form onSubmit={handleSubmit(registerUser)}>
        <div>
          <input type="text" {...register("name")} placeholder="Seu nome" />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <input type="email" {...register("email")} placeholder="Seu email" />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <input
            type="password"
            {...register("password")}
            placeholder="Sua senha"
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <input
            type="password"
            {...register("confirm")}
            placeholder="Confirme senha"
          />
          {errors.confirm ? <p>{errors.confirm.message}</p> : null}
        </div>
        <button type="submit">Cadastre-se</button>
      </form>
    </RegisterStyled>
  );
};
