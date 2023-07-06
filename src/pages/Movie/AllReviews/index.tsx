import { useContext, useEffect, useState } from "react";
import { IMovie, IReview } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";


interface ISection {
    movie: IMovie;
}


export const AllReviews = ({movie}: ISection) => {
    const { user } = useContext(UserContext);
    const [reviews, setReviews] = useState<IReview[] | undefined>(undefined)

    
    useEffect(() => {
        if((typeof user === "object" && user !== null) && (typeof movie === "object" && movie !== null)){
            setReviews(movie.reviews.filter(review => review.userId !== user.id))
        }
    }, [movie, user])
    
    return (
        <section>
            <ul>
                {reviews?.map( review => {
                    return (
                        <li key={review.id}>
                            <img src="" alt="" />
                            <span>{review.score}</span>
                            <p>{review.description}</p>
                            <h2>{review.id}</h2>
                        </li>
                    )}
                )}
            
                
            </ul>
        </section>
    )
}