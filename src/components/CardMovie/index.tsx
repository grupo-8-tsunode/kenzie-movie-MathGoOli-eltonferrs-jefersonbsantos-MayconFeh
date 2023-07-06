
import { Link } from "react-router-dom";

import { Navigate } from "react-router";

import { IMovie } from "../../providers/@types";
import { H3Styled } from "../../styles/typography";
import { /*AiFillStar*/ AiOutlineStar } from "react-icons/ai";
import { useContext } from "react";
import { Movie } from "../../pages/Movie";
import { MovieContext } from "../../providers/MovieContext";

interface ImovieType {
  movie: IMovie;
}

export const CardMovie = ({ movie }: ImovieType) => {
  const { test } = useContext(MovieContext);
  return (

    <li className="card__movie">
      <Link className="imgLink" to={`/movie/${movie.id}`}>
=======
    <li className="card__movie" onClick={() => test(movie)}>

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
