import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeLoginFormValue, loginSchema } from "./loginSchema";
import { Footer } from "../../components/Footer/Index";

export const Login = () => {
 
  const{ userLoginSubmit  } = useContext(UserContext)

  const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeLoginFormValue>({resolver: zodResolver(loginSchema)})

  const submit:SubmitHandler<TypeLoginFormValue> =(data) =>{
    userLoginSubmit(data)
    reset()
  }
 return(
    <>
       <Header/>
       <div>
          <form onSubmit={handleSubmit(submit)} >
            <h2>Login</h2>
            <input type="email" placeholder="Email"
            {...register("email")}/>
            {errors.email? <p>{errors.email.message}</p>:null}
            <input type="password" placeholder="Senha"
            {...register("password")}/>
            {errors.password? <p>{errors.password.message}</p>:null}
            <button type="submit" >Entrar</button>
          </form>
          <p>ou</p>
          <Link to={"/register"}>Cadastre-se</Link>
        </div>
        <Footer/>
    </>
  ) 
};
