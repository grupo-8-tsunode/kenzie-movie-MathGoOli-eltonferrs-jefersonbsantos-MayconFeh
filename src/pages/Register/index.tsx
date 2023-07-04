import { useForm, SubmitHandler } from "react-hook-form";
import { TypeResgisterFormValue, registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { RegisterStyled } from "./style";
import Arrow from "../../assets/arrow.svg";
import { Header } from "../../components/Header/Index";
import { Input } from "../../components/Inputs/Index";
import { H1Styled } from "../../styles/typography";

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
      <div className="title-goBackButton__container">
        <div>
          <H1Styled className="title">Cadastro</H1Styled>
          <p className="paragraph">Preencha os campos para cadastrar-se</p>
        </div>
        <button className="goBack__button">
          <img src={Arrow} alt="Seta apontando para esquerda" /> Voltar
        </button>
      </div>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="form__container">
          <Input type={"text"} placeholder="Seu nome" {...register("name")} />
          {errors.name ? <p>{errors.name.message}</p> : null}
          <Input type="email" {...register("email")} placeholder="Seu email" />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            type="password"
            {...register("password")}
            placeholder="Sua senha"
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <Input
            type="password"
            {...register("confirm")}
            placeholder="Confirme senha"
          />
          {errors.confirm ? <p>{errors.confirm.message}</p> : null}
        </div>
        <button type="submit" className="form__button">
          Cadastre-se
        </button>
      </form>
    </RegisterStyled>
  );
};
