import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../providers/MovieContext";
import { IMovie } from "../../providers/@types";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { MainImageSection } from "./MainImageSection";
import { UserContext } from "../../providers/UserContext";
import { ModalCreate } from "../../components/Modal/Create/Index";

export const Movie = () => {

    const { getMovie } = useContext(MovieContext);
    const [movie, setMovie] = useState< string | IMovie | undefined | null >(null);
    const { id } = useParams();

    const { isCreateModal, setIsCreateModal } =  useContext(UserContext);

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
            <button onClick={() => {setIsCreateModal(true)}}>CreateModal</button>
            {isCreateModal? <ModalCreate/> : null}
        </>
    )
}


