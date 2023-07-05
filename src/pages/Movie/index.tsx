
import { useContext, useEffect, useState } from "react"
import { MovieContext } from "../../providers/MovieContext"
import { IMovie } from "../../providers/@types";


export const Movie = () => {
    const { getMovie } = useContext(MovieContext);
    const [movie, setMovie] = useState< IMovie | object >({});

    console.log(movie)
    useEffect(() => {
        const loadMovie = async () => {

            const data = await getMovie(1)
            setMovie(data)
        }

        loadMovie()
    }, [])

    return (
        <>
            Movie
        </>
    )
}