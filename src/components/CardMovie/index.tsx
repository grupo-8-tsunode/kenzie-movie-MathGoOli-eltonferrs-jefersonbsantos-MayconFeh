import { Link } from "react-router-dom";
import { IMovie } from "../../providers/@types";
import { H3Styled } from "../../styles/typography";
import { /*AiFillStar*/ AiOutlineStar } from "react-icons/ai";

interface ImovieType {
  movie: IMovie;
}

export const CardMovie = ({ movie }: ImovieType) => {
  return (
    <li className="card__movie">
      <Link className="imgLink" to={`/movie/${movie.id}`}>
        <img className="movie__img" src={movie.image} alt="" />
      </Link>
      <div className="genre-duration__div">
        <span className="movie__genre">{movie.type}</span>
        <span className="movie__duration">{movie.duration} m</span>
      </div>
      <div className="movieTitle-avaliation__div">
        <H3Styled className="movie__title">{movie.name}</H3Styled>
        <div className="avaliation__div">
          <AiOutlineStar className="star" />
          {movie.reviews.length !== 0 ? (
            <span className="avaliation">
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
    </li>
  );
};
