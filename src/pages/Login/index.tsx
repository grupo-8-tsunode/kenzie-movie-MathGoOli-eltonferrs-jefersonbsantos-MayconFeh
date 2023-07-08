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
import { Button } from "../../components/Buttons/styles";

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
      <main>
        <div className="backgroundForm">
          <form onSubmit={handleSubmit(submit)}>
            <H1Styled>Login</H1Styled>
            
            <Input type="email" placeholder="Email" {...register("email")} errors={errors.email} isregister={false}/>
            <Input
              type="password"
              placeholder="Senha"
              {...register("password")} errors={errors.password} isregister={false}
              />
            <Button buttonsize="large" className="login__button" type="submit">
              Entrar
            </Button>
          </form>
          <div className="signUp__div">
            <p>ou</p>
            <Link to={"/register"} className="signUp__button">
              Cadastre-se
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </LoginStyled>
  );
};
