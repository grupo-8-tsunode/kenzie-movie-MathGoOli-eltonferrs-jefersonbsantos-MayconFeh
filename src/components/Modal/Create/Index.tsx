import { useContext, useEffect, useRef } from "react";
import { OverlayModalStyled } from "./styles";
import { UserContext } from "../../../providers/UserContext";
import { Button, ButtonExit } from "../../Buttons/styles";
import { H3Styled } from "../../../styles/typography";
import { AiOutlineStar } from "react-icons/ai";

export const ModalCreate = () => {
  const refModal = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  const { setIsCreateModal } = useContext(UserContext);

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

  const submit  =  () =>{

   
    
    setIsCreateModal(false)
  }

  return (
    <OverlayModalStyled role="dialog">
      <div className="boxModal" ref={refModal}>
        <div className="titleModal">
          <H3Styled>
            Avaliação
          </H3Styled>
          <ButtonExit onClick={() => {setIsCreateModal(false);}}ref={refButton}>
            X
          </ButtonExit>
        </div>
        <form className="reviewsModal">
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
          <Button onClick={()=>{submit()}} buttonsize="small">
            <AiOutlineStar/> Avaliar
          </Button>
        </form>
      </div>
    </OverlayModalStyled>
  );
};


