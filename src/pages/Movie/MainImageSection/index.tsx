import { IMovie } from "../../../providers/@types";
import { StyledSection } from "./style";

interface IMainImageSection {
  movie: string | IMovie | null | undefined;
}

export const MainImageSection = ({ movie }: IMainImageSection) => {    

  if (typeof movie === "object" && movie !== null) {
    return (
      <StyledSection image={movie ? movie.image : null}>
        <div>
          <span>{movie?.type}</span>
          <h2>{movie?.name}</h2>
        </div>
        <div>
          <span>{movie?.duration}</span>
          {movie?.reviews.length !== 0 ? (
            <span className="avaliation">
              {(
                movie.reviews.reduce(
                  (accumulator, current) => accumulator + current.score,
                  0
                ) / movie.reviews.length
              ).toFixed(1)}
            </span>
          ) : (
            "-"
          )}
        </div>
      </StyledSection>
    );
  }
  return <h1>Carregando...</h1>;
};
