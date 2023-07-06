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

    if (typeof movie === "object" && movie !== null){
        return (
            <>
                <Header/>
                <MainImageSection movie={movie} />
                <TextSection movie={movie}/>
                <UserReviewSection movie={movie}/>
                <AllReviews movie={movie}/>
                <button onClick={() => {setIsCreateModal(true)}}>CreateModal</button>
                {isCreateModal? <ModalCreate/> : null}
            </>
        )

    }
    return (
        <>
            <Header/>
            <h1>Carregando...</h1>
        </>
    )
}


