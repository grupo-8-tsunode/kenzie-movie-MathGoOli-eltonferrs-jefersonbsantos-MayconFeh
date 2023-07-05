
import { useContext, useEffect, useState } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { IMovie } from "../../providers/@types";
import { useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { MainImageSection } from "./MainImageSection";


export const Movie = () => {
    const { getMovie } = useContext(MovieContext);
    const [movie, setMovie] = useState< IMovie | object >({});
    const [searchParams, setSearchParams] = useSearchParams();


    console.log(movie)
    useEffect(() => {
        const loadMovie = async () => {
            const movieId = Number(searchParams.get("movieId"));
            const data = await getMovie(movieId);
            setMovie(data);
        }

        loadMovie()
    }, [])

    return (
        <>
            <Header/>
            <section>
                <MainImageSection movie={movie}></MainImageSection>

            </section>
            <footer></footer>
        </>
    )
}