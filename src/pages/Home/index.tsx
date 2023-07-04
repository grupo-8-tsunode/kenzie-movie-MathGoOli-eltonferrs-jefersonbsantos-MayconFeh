import Film from "../../assets/teste.png";
import { /*AiFillStar*/ AiOutlineStar } from "react-icons/ai";
import { HomeStyled } from "./style";
import { H3Styled } from "../../styles/typography";
import { Header } from "../../components/Header/Index";


export const Home = () => {
  return (
    <HomeStyled>
      <Header/>
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
                  <AiOutlineStar className="star"/>
                  
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
