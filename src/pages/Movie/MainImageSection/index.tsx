import { IMovie } from "../../../providers/@types";
import { H3Styled } from "../../../styles/typography";
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
            <span className="movie__genre">{movie?.type}</span>
            <H3Styled>{movie?.name}</H3Styled>
          </div>
          <div className="innerdiv">
            <p>{movie?.duration + "m"}</p>
            {movie?.reviews.length !== 0 ? (
              <span className="avaliation">
                <AiOutlineStar className="star" />
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
  return (
    <div className="loadingContainer">
          <div className="loading"/>
        </div>
  )
};
