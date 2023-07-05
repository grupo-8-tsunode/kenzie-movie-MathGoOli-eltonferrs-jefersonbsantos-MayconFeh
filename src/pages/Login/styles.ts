import { styled } from "styled-components";
import Background from "../../assets/login-background.png";

export const LoginStyled = styled.div`
  background-image: url("../../assets/login-background.png");
  background-size: cover;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }

  .login__button {
    width: 100%;
    height: 38px;
    background-color: var(--color-yellow);
    border: 1px solid var(--color-yellow);
    border-radius: 20px;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 20px;
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
