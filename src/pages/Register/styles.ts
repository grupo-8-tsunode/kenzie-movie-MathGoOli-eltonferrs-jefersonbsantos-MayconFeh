import { styled } from "styled-components";

export const RegisterStyled = styled.div`
  .title-goBackButton__container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .title {
    font-size: clamp(1.5rem, 0.0732rem + 2.439vw, 3rem);
  }

  .paragraph {
    font-size: clamp(1rem, 0.0732rem + 2.439vw, 1.6rem);
    font-family: "Inter";
    font-weight: 400;
    margin-bottom: 10px;
  }

  .goBack__button {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-family: Poppins;
    font-weight: 700;
    color: var(--color-yellow);
  }

  .form__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  .form__button {
    width: 100%;
    
  }
`;
