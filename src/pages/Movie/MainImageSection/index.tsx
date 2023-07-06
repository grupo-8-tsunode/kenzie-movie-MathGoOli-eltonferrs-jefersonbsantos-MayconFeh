import { IMovie } from "../../../providers/@types";
import { StyledSection } from "./style";
import { AiOutlineStar } from "react-icons/ai";

interface IMainImageSection {
  movie: string | IMovie | null | undefined;
}

export const MainImageSection = ({ movie }: IMainImageSection) => {
  if (typeof movie === "object" && movie !== null) {
    return (
      <StyledSection image={movie ? movie.image : null}>
        <div className="outdiv">

          <div className="innerdiv">
            <span>{movie?.type}</span>
            <h2>{movie?.name}</h2>
          </div>
          <div className="innerdiv">
            <span>{movie?.duration + "m"}</span>
            {movie?.reviews.length !== 0 ? (
              <span className="avaliation">
                <AiOutlineStar />
                {(
                  movie.reviews.reduce(
                    (accumulator, current) => accumulator + +current.score,
                    0
                  ) / movie.reviews.length
                ).toFixed(1)}
              </span>
            ) : (
              "-"
            )}
          </div>

        </div>
      </StyledSection>
    );
  }
  return <h1>Carregando...</h1>;
};
