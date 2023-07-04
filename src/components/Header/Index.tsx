import { Link } from "react-router-dom"
import { H3Styled } from "../../styles/typography"
import { HeaderStyled } from "./styles"

export const Header = () => {
    return(
        <HeaderStyled>
            <H3Styled>kenziemovie</H3Styled>
            <div>
             <Link className="register" to={"/register"} >Cadastrar</Link>
             <Link to={"/login"} >Entrar</Link>
            </div>
        </HeaderStyled>
    )
}