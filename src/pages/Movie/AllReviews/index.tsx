import { useContext, useEffect, useState } from "react";
import { IMovie, IReview } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";
import { AllReviewStyled } from "./style";
import { AiOutlineStar } from "react-icons/ai";
import { PStyled } from "../../../styles/typography";

interface ISection {
  movie: IMovie;
}

export const AllReviews = ({ movie }: ISection) => {
  const { user } = useContext(UserContext);
  const [reviews, setReviews] = useState<IReview[] | undefined>(undefined);

  useEffect(() => {
    if (
      typeof user === "object" &&
      user !== null &&
      typeof movie === "object" &&
      movie !== null
    ) {
      setReviews(movie.reviews.filter((review) => review.userId !== user.id));
    } else {
      setReviews(movie.reviews);
    }
  }, [movie, user]);

  return (
    <AllReviewStyled>
      <ul>
        {reviews?.map((review) => {
          return (
            <li key={review.id}>
              <span className="user">J</span>
              <div className="avaliation__div">
                <AiOutlineStar className="star" />
                <span className="score">{review.score}</span>
              </div>
              <PStyled>{review.description}</PStyled>
              <h4>Nome do usuário</h4>
            </li>
          );
        })}
      </ul>
    </AllReviewStyled>
  );
};
