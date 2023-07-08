import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { H3Styled } from "../../../styles/typography";
import { AiOutlineStar } from "react-icons/ai";
import { Button, ButtonExit } from "../../Buttons/styles";
import { OverlayEditModalStyled } from "./styles";
import { useParams } from "react-router-dom";
import { SubmitHandler,useForm } from "react-hook-form";
import { AddreviewSchema, TypeAddreviewSchema } from "../Create/createSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MovieContext } from "../../../providers/MovieContext";
import { IReview } from "../../../providers/@types";


export const EditModal = () =>{
  const refModal = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);
  const { setIsEditModal } = useContext(UserContext);
  const { register, handleSubmit, reset, setValue, formState: {errors}} = useForm<TypeAddreviewSchema>({resolver: zodResolver(AddreviewSchema)})
  const{ userEditReview, user }= useContext(UserContext)
  const { id }= useParams()
  const userId = localStorage.getItem("@KenzieMovie:UserID")
  const {targetReviews, setTargetReviews} = useContext(MovieContext)

  const [userReview, setUserReview] = useState<IReview | undefined>(
    undefined
  );
  
  useEffect(() => {
    if(targetReviews &&
      user !== null){
      setUserReview(targetReviews.filter((review) => review.userId == user.id)[0]);
    }
  }, [targetReviews])

  useEffect(() => {
    setValue("score", `${userReview?.score}`);
    setValue("description", `${userReview?.description}`);
  }, [userReview] )

  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (refModal.current && !refModal.current.contains(e.target as Node)) {
        setIsEditModal(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        refButton.current?.click();
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsEditModal]);

  const submit: SubmitHandler<TypeAddreviewSchema> = async (data) => {
    setIsEditModal(false)
    const reviewId =localStorage.getItem("@KenzieMovie:ReviewID");
    await userEditReview({...data,"userId":Number(userId),"movieId":Number(id)},""+reviewId, setTargetReviews, targetReviews)
    reset()
  }

  return (
    <OverlayEditModalStyled role="dialog">
      <div className="boxModal" ref={refModal}>
        <div className="titleModal">
          <H3Styled>
            Editar Avaliação
          </H3Styled>
          <ButtonExit    onClick={() => {setIsEditModal(false);}}ref={refButton}>
            X
          </ButtonExit>
        </div>
        <form className="editModal" onSubmit={handleSubmit(submit)}>
          <select {...register("score")} >
            <option value="" hidden >Selecione uma nota</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          {errors? <p>{errors.score?.message}</p>:<></>}
          <textarea {...register("description")} placeholder="Deixe seu comentário..."></textarea>
          <Button type="submit" buttonsize="small">
          {errors? <p>{errors.description?.message}</p>:<></>}
            <AiOutlineStar/> Atualizar
          </Button>
        </form>
      </div>
    </OverlayEditModalStyled>
  )
}


