import Logo from "../../assets/kenziemovie.png";
import Film from "../../assets/teste.png";
import Star from "../../assets/star.png";
import { HomeStyled } from "./style";

export const Home = () => {
  return (
    <HomeStyled>
      <header className="homeHeader__container">
        <img className="logo" src={Logo} alt="Logo Kenziemovie" />
        <div>
          <button className="signUp__button">Cadastre-se</button>
          <button className="singIn__button">Entrar</button>
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
              <div>
                <h2>The Random Heros</h2>
                <div>
                  <img src={Star} alt="" />
                  <span>5.0</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </HomeStyled>
  );
};
