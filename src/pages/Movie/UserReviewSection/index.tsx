import { useContext, useEffect, useState } from "react";
import { IMovie, IReview } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";
import { UserReviewStyled } from "./style";

interface ISection {
  movie: IMovie;
}

export const UserReviewSection = ({ movie }: ISection) => {
  const { user } = useContext(UserContext);
  const [UserReview, setUserReview] = useState<IReview[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (
      typeof user === "object" &&
      user !== null &&
      typeof movie === "object" &&
      movie !== null
    ) {
      setUserReview(movie.reviews.filter((review) => review.userId == user.id));
    }
  }, [movie, user]);

  return (
    <UserReviewStyled>
      <h4>Sua Avaliação</h4>
      {typeof UserReview !== "undefined" && UserReview?.length > 0 ? (
        <p>{UserReview[0].description}</p>
      ) : (
        <h2>Deixe sua avaliação aqui</h2>
      )}

      <button>E</button>
      <button>D</button>
    </UserReviewStyled>
  );
};
