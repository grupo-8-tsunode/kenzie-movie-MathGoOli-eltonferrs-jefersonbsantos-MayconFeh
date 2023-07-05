import {IMovie} from "../../../providers/@types"
import { StyledSection } from "./style"



export const MainImageSection = ({movie}:IMovie) => {
    
    return (
        <StyledSection image={movie.image}>
            
        </StyledSection>
    )
}