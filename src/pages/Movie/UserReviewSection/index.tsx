import { useContext, useEffect, useState } from "react";
import { IMovie, IReview } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";
import { UserReviewStyled } from "./style";
import { EditModal } from "../../../components/Modal/Edit/Index";
import { BsPencil } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { BiStar } from "react-icons/bi";

interface ISection {
  movie: IMovie;
}

export const UserReviewSection = ({ movie }: ISection) => {
  const { user, isEditModal, setIsEditModal, userDeleteReview } =
    useContext(UserContext);
  const [UserReview, setUserReview] = useState<IReview[] | undefined>(
    undefined
  );

  const idReviews = (value: string) => {
    localStorage.setItem("@KenzieMovie:ReviewID", value);
  };
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
        <>
          {" "}
          <p>{UserReview[0].description}</p>
          {isEditModal ? <EditModal /> : null}
          <p>
            <BiStar class="starIcon" size={30} />
            {UserReview[0].score}
          </p>
          <button
            value={UserReview[0].id}
            onClick={(event) => (
              idReviews(event.currentTarget.value), setIsEditModal(true)
            )}
          >
            {" "}
            <BsPencil class="buttonIcon" size={30} />
          </button>
          <button
            value={UserReview[0].id}
            onClick={(event) =>
              userDeleteReview("" + event.currentTarget.value)
            }
          >
            {" "}
            <FiTrash2 class="buttonIcon" size={30} />
          </button>
        </>
      ) : (
        <h2>Deixe sua avaliação aqui</h2>
      )}
    </UserReviewStyled>
  );
};
