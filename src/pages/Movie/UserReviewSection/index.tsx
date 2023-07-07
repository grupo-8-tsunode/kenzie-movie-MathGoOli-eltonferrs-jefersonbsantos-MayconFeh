import { useContext, useEffect, useState } from "react";
import { IMovie, IReview } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";
import { UserReviewStyled } from "./style";
import { EditModal } from "../../../components/Modal/Edit/Index";

interface ISection {
  movie: IMovie;
}

export const UserReviewSection = ({ movie }: ISection) => {
  const { user ,isEditModal, setIsEditModal} = useContext(UserContext);
  const [UserReview, setUserReview] = useState<IReview[] | undefined>(
    undefined
  );

  const idReviews= (value:string)=>{
    localStorage.setItem("@KenzieMovie:ReviewID", value);
  }
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
       <> <p>{UserReview[0].description}</p>
        {isEditModal ? <EditModal /> : null}
        <button value={UserReview[0].id} onClick={event=>(idReviews(event.currentTarget.value),setIsEditModal(true))}>E</button>
      </>
      ) : (
        <h2>Deixe sua avaliação aqui</h2>
      )}

      <button>D</button>
    </UserReviewStyled>
  );
};
