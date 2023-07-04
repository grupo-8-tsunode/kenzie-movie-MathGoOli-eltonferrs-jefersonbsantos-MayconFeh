

import { createContext, useState } from "react";
import { api } from "../services/api";
import { IMovie } from "./@types";

export const MovieContext = createContext({});

export const MovieProvider = ({children}) => {
    const [movies , setMovies] = useState< IMovie[] | null >(null);

    const getMovies = async () => {
        const { data } = api.get("/movies")

        setMovies(data)

    }

    return (
        <MovieContext.Provider>
            {children}
        </MovieContext.Provider>
    )
}