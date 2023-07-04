import Logo from "../../assets/kenziemovie.svg";
import Film from "../../assets/teste.png";
import Star from "../../assets/star.svg";
import { HomeStyled } from "./style";
import { H3Styled } from "../../styles/typography";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HomeStyled>
      <header className="homeHeader__container">
        <img className="logo" src={Logo} alt="Logo Kenziemovie" />
        <div>
          <button className="signUp__button">Cadastre-se</button>
          <Link to={"/login"} className="singIn__button">
            Entrar
          </Link>
        </div>
      </header>
      <main className="homeMain__container">
        <section>
          <ul className="cards__container">
            <li className="card__movie">
              <img className="movie__img" src={Film} alt="" />
              <div className="genre-duration__div">
                <span className="movie__genre">Ficção</span>
                <span className="movie__duration">90m</span>
              </div>
              <div className="movieTitle-avaliation__div">
                <H3Styled className="movie__title">The Random Heros</H3Styled>
                <div className="avaliation__div">
                  <img className="star" src={Star} alt="" />
                  <span className="avaliation">5.0</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </HomeStyled>
  );
};
