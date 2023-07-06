import { HomeStyled } from "./style";
import { Header } from "../../components/Header/Index";
import { CardMovie } from "../../components/CardMovie";
import { IMovie } from "../../providers/@types";
import { useContext } from "react";
import { MovieContext } from "../../providers/MovieContext";
import { Footer } from "../../components/Footer/Index";

export const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <HomeStyled>
      <Header />
      <main className="homeMain__container">
        <section>
          <ul className="cards__container">
            {movies?.map((movie: IMovie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </HomeStyled>
  );
};
