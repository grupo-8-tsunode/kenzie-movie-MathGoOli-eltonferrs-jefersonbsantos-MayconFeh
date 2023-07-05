import { IMovie } from "../../providers/@types";
import { H3Styled } from "../../styles/typography"
import { /*AiFillStar*/ AiOutlineStar } from "react-icons/ai";

interface ImovieType{
    movie:IMovie
}

export const CardMovie = ({movie}:ImovieType) => {
    return(
        <li className="card__movie">
              <img className="movie__img" src={movie.image} alt="" />
              <div className="genre-duration__div">
                <span className="movie__genre">Ficção</span>
                <span className="movie__duration">90m</span>
              </div>
              <div className="movieTitle-avaliation__div">
                <H3Styled className="movie__title">The Random Heros</H3Styled>
                <div className="avaliation__div">
                  <AiOutlineStar className="star"/>
                  <span className="avaliation">5.0</span>
                </div>
              </div>
        </li>
    )
}