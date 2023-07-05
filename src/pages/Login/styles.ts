import { styled } from "styled-components";


export const LoginStyled = styled.main`

  background-image: url(/src/assets/login-background.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  
 

  .backgroundForm{
    
    
    background: var(--color-lightgray-2);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }

  .login__button {
    width: 100%;
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
