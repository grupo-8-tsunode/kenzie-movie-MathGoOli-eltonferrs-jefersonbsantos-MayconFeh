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
    @media (min-width: 768px) {
      width: 70%;
    }
  }

  main {
    height: 75vh;
    @media (min-width: 768px) {
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .title-goBackButton__container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 10px;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      max-width: 690px;
      margin: 0 auto;
      text-align: start;
      margin-bottom: 30px;
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
    max-width: 450px;
    margin: 0 auto;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      max-width: 690px;
    }
  }

  input {
    @media (min-width: 768px) {
      height: 60px;
      max-width: 312px;
    }
  }

  .form__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    max-width: 690px;
    @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 40px;
      margin-bottom: 30px;
    }
  }

  .form__button {
    width: 98%;
    @media (min-width: 768px) {
      height: 60px;
      max-width: 200px;
      align-self: flex-end;
    }
  }
`;
