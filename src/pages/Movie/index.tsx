import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../providers/MovieContext";
import { IMovie } from "../../providers/@types";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { MainImageSection } from "./MainImageSection";

export const Movie = () => {

    const { getMovie } = useContext(MovieContext);
    const [movie, setMovie] = useState< IMovie | void | null >(null);
    const { id } = useParams();


    useEffect(() => {
        const loadMovie = async () => {
            const movieId = Number(id);
            const data = await getMovie(movieId);
            setMovie(data);
        }

        loadMovie()
    }, [])

    return (
        <>
            <Header/>
            <MainImageSection movie={movie} />

            
        </>
    )
}


