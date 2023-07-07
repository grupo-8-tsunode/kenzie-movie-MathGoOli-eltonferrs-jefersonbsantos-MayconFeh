import { useContext, useEffect, useRef } from "react";
import { OverlayModalStyled } from "./styles";
import { UserContext } from "../../../providers/UserContext";
import { Button, ButtonExit } from "../../Buttons/styles";
import { H3Styled } from "../../../styles/typography";
import { AiOutlineStar } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddreviewSchema, TypeAddreviewSchema } from "./createSchema";
import { useParams } from "react-router";

export const ModalCreate = () => {
  const userId = localStorage.getItem("@KenzieMovie:UserID");
  const refModal = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);
  const {register,handleSubmit,reset, formState: {errors}}=useForm<TypeAddreviewSchema>({resolver: zodResolver(AddreviewSchema)})
  const { setIsCreateModal, userAddReview } = useContext(UserContext);
  const { id } = useParams()


  useEffect(() => {
    const handleOutClick = (e: MouseEvent) => {
      if (refModal.current && !refModal.current.contains(e.target as Node)) {
        setIsCreateModal(false);
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
  }, [setIsCreateModal]);

  const submit: SubmitHandler<TypeAddreviewSchema>  =  (data) =>{
    setIsCreateModal(false)
    const PostReview={...data,"movieId":Number(id),"userId":Number(userId)}
    userAddReview(PostReview)
    reset()
  }

  return (
    <OverlayModalStyled role="dialog">
      <div className="boxModal" ref={refModal}>
        <div className="titleModal">
          <H3Styled>
            Avaliação
          </H3Styled>
          <ButtonExit onClick={() => {setIsCreateModal(false)}}ref={refButton}>
            X
          </ButtonExit>
        </div>
        <form className="reviewsModal" onSubmit={handleSubmit(submit)} >
          <select {...register("score")}>
            <option value="">Selecione uma nota</option>
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
          {errors? <p>{errors.description?.message}</p>:<></>}
          <Button type="submit" buttonsize="small">
            <AiOutlineStar/> Avaliar
          </Button>
        </form>
      </div>
    </OverlayModalStyled>
  );
};


