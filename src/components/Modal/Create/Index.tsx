import { useContext, useEffect, useRef } from "react";
import { OverlayModalStyled } from "./styles";
import { UserContext } from "../../../providers/UserContext";
import { Button } from "../../Buttons/styles";
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

  return (
    <OverlayModalStyled role="dialog">
      <div className="boxModal" ref={refModal}>
        <div>
          <Button buttonsize="large" onClick={() => {setIsCreateModal(false);}}ref={refButton}>
            X
          </Button>
          <H3Styled>
            Avaliação
          </H3Styled>
        </div>
        <select name="" id="">
          <option value="">Selecione uma nota</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea placeholder="Deixe seu comentário"></textarea>
        <Button buttonsize="small">
          <AiOutlineStar/> Avaliar
        </Button>
      </div>
    </OverlayModalStyled>
  );
};
