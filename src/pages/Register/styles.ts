import { styled } from "styled-components";

export const RegisterStyled = styled.div`
  height: 65%;
  > .test {
    height: 100%;
    width: 100%;
    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  header {
    width: 90%;
    margin: 0 auto;
  }

  .title-goBackButton__container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 10px;
    @media (min-width: 768px) {
      align-items: flex-start;
      text-align: start;
      flex-direction: row;
      justify-content: space-between;
    }
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
  form {
    height: 250px;
  }
  .form__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      height: 150px;
      flex-wrap: wrap;
    }
  }

  .form__button {
    width: 100%;
  }
`;
