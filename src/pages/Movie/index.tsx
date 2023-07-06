import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../providers/MovieContext";
import { IMovie } from "../../providers/@types";
import { useParams, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { MainImageSection } from "./MainImageSection";

export const Movie = () => {
  const { getMovie, actualMovie, setActualMovie } = useContext(MovieContext);
  //   const [movie, setMovie] = useState<IMovie | object>({});
  //   const [searchParams, setSearchParams] = useSearchParams();

  const { movieId } = useParams();
  const newId: number = +movieId;

  useEffect(() => {
    const loadMovie = async () => {
      //   const movieId = Number(searchParams.get("movieId"));
      const data = await getMovie(newId);
      //   setMovie(data);
    };

    loadMovie();
  }, []);

  return (
    <>
      <Header />
      <section>
        <MainImageSection></MainImageSection>
      </section>
      <footer></footer>
    </>
  );
};
