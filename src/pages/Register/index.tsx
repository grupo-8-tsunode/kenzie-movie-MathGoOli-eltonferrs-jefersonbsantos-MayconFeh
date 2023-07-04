import { useForm ,SubmitHandler} from "react-hook-form"
import { Link } from "react-router-dom"
import { TypeResgisterFormValue, registerSchema } from "./registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const Register = () => {
    const {register,handleSubmit,reset, formState: {errors}} = useForm<TypeResgisterFormValue>({resolver:zodResolver(registerSchema)})

    const { registerNewuser}= useContext(UserContext)

    const registerUser:SubmitHandler<TypeResgisterFormValue> =(data)=>{
        registerNewuser(data)
        reset()
    }

    return (
        <>
            <header>
                <nav>
                    {/*logo */}
                    <div>
                        <Link to={"/register"}>Cadastre-se</Link>
                        <Link to={"/login"}>Entrar</Link>
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
                    <input type="text" {...register("name")} placeholder="seu nome" />
                    {errors.name ? <p>{errors.name.message}</p>:null}
                    <input type="email" {...register("email")}  placeholder="seu email"/>
                    {errors.email ? <p>{errors.email.message}</p>:null}
                    <input type="password" {...register("password")} placeholder="sua senha" />
                    {errors.password ? <p>{errors.password.message}</p>:null}
                    <input type="password"  {...register("confirm")} placeholder="confirme senha" />
                    {errors.confirm ? <p>{errors.confirm.message}</p>:null}
                </div>
                <button type="submit">Cadastre-se</button>
            </form>
        </>
    )
}