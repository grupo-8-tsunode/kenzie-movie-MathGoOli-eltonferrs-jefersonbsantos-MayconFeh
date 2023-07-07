import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../providers/MovieContext";
import { IMovie } from "../../providers/@types";

import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { MainImageSection } from "./MainImageSection";
import { UserContext } from "../../providers/UserContext";
import { ModalCreate } from "../../components/Modal/Create/Index";

import { TextSection } from "./TextSection";
import { UserReviewSection } from "./UserReviewSection";
import { AllReviews } from "./AllReviews";

import { EditModal } from "../../components/Modal/Edit/Index";
import { MovieStyled } from "./style";
import { H3Styled } from "../../styles/typography";
import { Footer } from "../../components/Footer/Index";

export const Movie = () => {
  const { getMovie } = useContext(MovieContext);
  const [movie, setMovie] = useState<string | IMovie | undefined | null>(null);
  const { id } = useParams();

  const { isCreateModal, setIsCreateModal, isEditModal, setIsEditModal } =
    useContext(UserContext);

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
          <H3Styled>Avaliações</H3Styled>
          <UserReviewSection movie={movie} />
          <AllReviews movie={movie} />
          <button
            onClick={() => {
              setIsCreateModal(true);
            }}
          >
            CreateModal
          </button>
          {isCreateModal ? <ModalCreate /> : null}
        </main>
        <Footer />
      </MovieStyled>
    );
  }
  return (
    <>
      <Header />

      <h1>Carregando...</h1>
    </>
  );
};
