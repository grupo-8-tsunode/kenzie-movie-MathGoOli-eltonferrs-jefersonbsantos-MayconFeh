import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IChildren, IMovie, IMovieContext, IReview } from "./@types";

export const MovieContext = createContext({} as IMovieContext);

export const MovieProvider = ({ children }: IChildren) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

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
      const { data } = await api.get<IMovie>(`/movies/${id}/?_embed=reviews`);
      return data;
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

  return (
    <MovieContext.Provider value={{ movies, getMovies, getMovie, getReview }}>
      {children}
    </MovieContext.Provider>
  );
};
