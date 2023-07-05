import { HomeStyled } from "./style";
import { Header } from "../../components/Header/Index";
export const Home = () => {
  const { movies } = useContext(MovieContext);
  console.log(movies)
  return (
    <HomeStyled>
      <Header />
      <main className="homeMain__container">
        <section>
          <ul className="cards__container">
            {movies?.map( movie => <CardMovie key={movie.id} movie={movie}/>)}
          </ul>
        </section>
      </main>
      <Footer/>
    </HomeStyled>
  );
};
