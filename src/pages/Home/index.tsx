import Film from "../../assets/teste.png";
import { /*AiFillStar*/ AiOutlineStar } from "react-icons/ai";
import { HomeStyled } from "./style";
import { H3Styled } from "../../styles/typography";
import { Header } from "../../components/Header/Index";
import { useContext } from "react";
import { MovieContext } from "../../providers/MovieContext";

export const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <HomeStyled>
      <Header />
      <main className="homeMain__container">
        <section>
          <ul className="cards__container">
            {movies?.map((movie) => (
              <li key={movie.id} className="card__movie">
                <img className="movie__img" src={movie.image} alt="" />
                <div className="genre-duration__div">
                  <span className="movie__genre">{movie.type}</span>
                  <span className="movie__duration">{movie.duration}</span>
                </div>
                <div className="movieTitle-avaliation__div">
                  <H3Styled className="movie__title">{movie.name}</H3Styled>
                  <div className="avaliation__div">
                    <AiOutlineStar className="star" />
                    <span className="avaliation">5.0</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </HomeStyled>
  );
};
