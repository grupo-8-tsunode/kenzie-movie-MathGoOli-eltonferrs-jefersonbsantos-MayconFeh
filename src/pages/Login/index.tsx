import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeLoginFormValue, loginSchema } from "./loginSchema";
import { LoginStyled } from "./styles";
import { H1Styled } from "../../styles/typography";
import { Input } from "../../components/Inputs/Index";
import { Footer } from "../../components/Footer/Index";


export const Login = () => {
  const { userLoginSubmit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeLoginFormValue>({ resolver: zodResolver(loginSchema) });

  const submit: SubmitHandler<TypeLoginFormValue> = (data) => {
    userLoginSubmit(data);
    reset();
  };
  return (
    <LoginStyled>
      <Header />
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <H1Styled>Login</H1Styled>
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <button className="login__button" type="submit">
            Entrar
          </button>
        </form>
        <div className="signUp__div">
          <p>ou</p>
          <Link to={"/register"} className="signUp__button">
            Cadastre-se
          </Link>
        </div>
      </div>
      {/*footer */}
    </LoginStyled>
  );
        <Footer/>
    </>

};
