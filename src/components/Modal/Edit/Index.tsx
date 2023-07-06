import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../../providers/UserContext";
import { H3Styled } from "../../../styles/typography";
import { AiOutlineStar } from "react-icons/ai";
import { Button, ButtonExit } from "../../Buttons/styles";
import { OverlayEditModalStyled } from "./styles";

export const EditModal = () =>{
    const refModal = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  const { setIsEditModal } = useContext(UserContext);

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

  const submit = () => {
    setIsEditModal(false)
    
  }

  return (
    <OverlayEditModalStyled role="dialog" onSubmit={()=>{submit()}}>
      <div className="boxModal" ref={refModal}>
        <div className="titleModal">
          <H3Styled>
            Editar Avaliação
          </H3Styled>
          <ButtonExit    onClick={() => {setIsEditModal(false);}}ref={refButton}>
            X
          </ButtonExit>
        </div>
        <form className="editModal">
          <select name="" id="" required>
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
          <textarea required placeholder="Deixe seu comentário..."></textarea>
          <Button type="submit" buttonsize="small">
            <AiOutlineStar/> Atualizar
          </Button>
        </form>
      </div>
    </OverlayEditModalStyled>
  )
}


