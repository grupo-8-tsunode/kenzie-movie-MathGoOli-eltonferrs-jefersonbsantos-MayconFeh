import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IChildren, IMovie, IMovieContext, IReview } from "./@types";
import { useNavigate } from "react-router";

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = ({ children }: IChildren) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [actualMovie, setActualMovie] = useState<IMovie | null>(null);

  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const { data } = await api.get<IMovie[]>("/movies?_embed=reviews");

      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMovie = async (id: number) => {
    try {
      const { data } = await api.get<IMovie>(`/movies/${id}?_embed=reviews`);
      setActualMovie(data);
    } catch (error) {
      return error;
    }
  };

  const getReview = async (idMovie: number, idUser: number) => {
    try {
      const { data } = await api.get<IReview>(
        `/movies/${idMovie}/reviews?userId=${idUser}`
      );
      return data;
    } catch (error) {
      return error;
    }
  };

  const test = (movie: IMovie) => {
    setActualMovie(movie);
    navigate(`/movie/${movie.id}`);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        getMovies,
        getMovie,
        getReview,
        actualMovie,
        setActualMovie,
        test,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
