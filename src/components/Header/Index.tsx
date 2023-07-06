import { useNavigate } from "react-router-dom"
import { H3Styled } from "../../styles/typography"
import { HeaderStyled } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { RegisterButtons } from "./RegisterButons"
import { UserButtons } from "./UserButtons"

export const Header = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);


    return(
        <HeaderStyled>
            <H3Styled onClick={() => navigate("/")}>kenziemovie</H3Styled>
            {user? <UserButtons/> : <RegisterButtons/>}

        </HeaderStyled>
    )
}