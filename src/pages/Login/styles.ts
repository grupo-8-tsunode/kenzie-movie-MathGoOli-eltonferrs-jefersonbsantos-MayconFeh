import { styled } from "styled-components";

export const LoginStyled = styled.div`
  background-image: url(/src/assets/login-background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;

  main {
    height: 75vh;
    @media (min-width: 768px) {
      height: 70vh;
      width: 70%;
    }
  }

  header {
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 70%;
    }
  }

  .backgroundForm {
    background: var(--color-lightgray-2);
    padding-bottom: 10px;
    max-width: 500px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
      height: 600px;
      margin-top: 100px;
    }
  }

  input {
    @media (min-width: 768px) {
      height: 60px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    gap: 50px;
  }

  .login__button {
    width: 98%;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      height: 60px;
    }
  }

  a.signUp__button {
    text-decoration: none;
    color: var(--color-yellow);
    font-size: 1rem;
    font-family: "Poppins";
    font-weight: 700;
  }

  .signUp__div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;
