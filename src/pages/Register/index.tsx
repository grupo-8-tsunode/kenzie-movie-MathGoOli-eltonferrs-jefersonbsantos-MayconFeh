import { useForm, SubmitHandler } from "react-hook-form";
import { TypeResgisterFormValue, registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { RegisterStyled } from "./style";
import { Header } from "../../components/Header/Index";
import { Input } from "../../components/Inputs/Index";
import { H1Styled } from "../../styles/typography";
import Arrow from "../../assets/arrow.svg";

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
          <Input
            type={"text"}
            placeholder={"Seu nome"}
            {...register("name")}
            errors={errors.name}
          />

          <Input
            type={"email"}
            placeholder={"Seu email"}
            {...register("email")}
            errors={errors.email}
          />

          <Input
            type={"password"}
            placeholder={"Sua senha"}
            {...register("password")}
            errors={errors.password}
          />

          <Input
            type={"password"}
            placeholder={"Confirme senha"}
            {...register("confirm")}
            errors={errors.confirm}
          />
        </div>
        <button type="submit" className="form__button">
          Cadastre-se
        </button>
      </form>
    </RegisterStyled>
  );
};
