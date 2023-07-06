import { IMovie } from "../../../providers/@types"
import { StyledSection } from "./style"

interface IMainImageSection{
    movie: IMovie | null;
}

    
export const MainImageSection = ({ movie }: IMainImageSection) => {
    console.log(movie)
    return (
        <StyledSection image={movie ? movie.image : null}>
            <div>
                <span>{movie?.type}</span>
                <h2>{movie?.name}</h2>
            </div>
            <div>
                <span>{movie?.duration}</span>
                <span>10</span>
            </div>
        </StyledSection>
    )
}