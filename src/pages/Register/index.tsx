import { useForm, SubmitHandler } from "react-hook-form";
import { TypeResgisterFormValue, registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { RegisterStyled } from "./styles";
import { Header } from "../../components/Header/Index";
import { Input } from "../../components/Inputs/Index";
import { H1Styled, PStyled } from "../../styles/typography";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons/styles";
import { Footer } from "../../components/Footer/Index";

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
      <Header />
      <main>
        <div className="test">
          <div className="title-goBackButton__container">
            <div className="title-register">
              <H1Styled>Cadastro</H1Styled>
              <PStyled>Preencha os campos para cadastrar-se</PStyled>
            </div>
            <Link to={"/login"} className="goBack__button">
              <AiOutlineArrowLeft /> Voltar
            </Link>
          </div>
          <form onSubmit={handleSubmit(registerUser)}>
            <div className="form__container">
              <Input
                type={"text"}
                placeholder={"Seu nome"}
                {...register("name")}
                errors={errors.name}
                isregister={true}
              />

              <Input
                type={"email"}
                placeholder={"Seu email"}
                {...register("email")}
                errors={errors.email}
                isregister={true}
              />

              <Input
                type={"password"}
                placeholder={"Sua senha"}
                {...register("password")}
                errors={errors.password}
                isregister={true}
              />

              <Input
                type={"password"}
                placeholder={"Confirme senha"}
                {...register("confirm")}
                errors={errors.confirm}
                isregister={true}
              />
            </div>
            <Button buttonsize="large" type="submit" className="form__button">
              Cadastre-se
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </RegisterStyled>
  );
};
