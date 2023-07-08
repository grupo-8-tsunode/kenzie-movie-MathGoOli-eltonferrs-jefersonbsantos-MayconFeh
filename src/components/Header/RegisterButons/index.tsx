import { Link } from "react-router-dom";

export const RegisterButtons = () => {
  return (
    <div>
      <Link className="register" to={"/register"}>
        Cadastrar
      </Link>
      <Link to={"/login"}>Entrar</Link>
    </div>
  );
};
