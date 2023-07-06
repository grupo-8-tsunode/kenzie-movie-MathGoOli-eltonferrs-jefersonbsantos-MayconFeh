import { useContext, useEffect, useState } from "react";
import { IMovie, IReview } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";

interface ISection {
    movie: IMovie;
}


export const UserReviewSection = ({movie}: ISection) => {
    const { user } = useContext(UserContext);
    const [UserReview, setUserReview] = useState< IReview[] | undefined >(undefined)

    
    useEffect(()=>{
        if((typeof user === "object" && user !== null) && (typeof movie === "object" && movie !== null) ){
            setUserReview( movie.reviews.filter(review => review.userId == user.id));
            
        }


    },[movie, user])


    return (
        <section>
            <h3>Sua Avaliação</h3>
            { typeof UserReview !== "undefined" && UserReview?.length > 0 ? <p>{UserReview[0].description}</p>: <h2>Deixe sua avaliação aqui</h2>}

            <button>E</button>
            <button>D</button>

        </section>
    )
}