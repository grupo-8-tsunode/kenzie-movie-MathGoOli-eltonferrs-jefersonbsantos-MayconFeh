import { useContext, useEffect, useState } from "react";
import { IMovie, IReview } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";
import { UserReviewStyled } from "./style";
import { EditModal } from "../../../components/Modal/Edit/Index";
import { BsPencil } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { BiStar } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { ModalCreate } from "../../../components/Modal/Create/Index";

interface ISection {
  movie: IMovie;
}

export const UserReviewSection = ({ movie }: ISection) => {
  const {
    user,
    isEditModal,
    setIsEditModal,
    userDeleteReview,
    setIsCreateModal,
    isCreateModal,
  } = useContext(UserContext);
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
      {typeof UserReview !== "undefined" && UserReview?.length > 0 ? (
        <div className="EditReviewSection">
          {" "}
          <h4>Sua Avaliação</h4>
          <div className="EditReviewContent">
            <p className="userReview">{UserReview[0].description}</p>
            {isEditModal ? <EditModal /> : null}
            <div className="EditReview__buttons">
              <BiStar class="starIcon" size={30} />
              <span className="userReview__span">
                {Number(UserReview[0].score).toFixed(1)}
              </span>

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
            </div>
          </div>
        </div>
      ) : (
        <div className="addReviewSection">
          {isCreateModal ? <ModalCreate /> : null}
          <h2>Deixe sua avaliação aqui</h2>
          <button
            className="avaliation__button"
            onClick={() => {
              setIsCreateModal(true);
            }}
          >
            <AiOutlineStar className="star" />
            Avaliar
          </button>
        </div>
      )}
    </UserReviewStyled>
  );
};
