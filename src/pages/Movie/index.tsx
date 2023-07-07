import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../providers/MovieContext";
import { IMovie } from "../../providers/@types";

import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { MainImageSection } from "./MainImageSection";

import { TextSection } from "./TextSection";
import { UserReviewSection } from "./UserReviewSection";
import { AllReviews } from "./AllReviews";

import { MovieStyled } from "./style";
import { H3Styled } from "../../styles/typography";
import { Footer } from "../../components/Footer/Index";


export const Movie = () => {
  const { getMovie } = useContext(MovieContext);
  const [movie, setMovie] = useState<string | IMovie | undefined | null>(null);
  const { id } = useParams();


  useEffect(() => {
    const loadMovie = async () => {
      const movieId = Number(id);
      const data = await getMovie(movieId);
      setMovie(data);
    };

    loadMovie();
  }, []);

  if (typeof movie === "object" && movie !== null) {
    return (
      <MovieStyled>
        <Header />
        <MainImageSection movie={movie} />
        <main>
          <TextSection movie={movie} />
          <H3Styled className="avaliation__title">Avaliações</H3Styled>
          <div className="noAvaliation__div">
            <UserReviewSection movie={movie} />

          </div>
          <AllReviews movie={movie} />
          
        </main>
        <Footer />
      </MovieStyled>
    );
  }
  return (
    <>
      <h1>Carregando...</h1>
    </>
  );
};
