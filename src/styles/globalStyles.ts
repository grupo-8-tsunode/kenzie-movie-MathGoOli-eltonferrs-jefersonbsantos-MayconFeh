import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-black: #000000;
        --color-white: #FFFFFF;
        --color-yellow: #FFBB38;
        --color-lightgray-1: #3D3D3D;
        --color-lightgray-2: #171717;
        --toastify-color-success: var(--color-yellow);
	    --toastify-color-error: #Da370f;
	    --toastify-color-light: var(--color-lightgray-1); 
	    --toastify-text-color-light: var(--color-white);
    }

   #root{
        max-width: 100vw;
        width: 100vw;
        height:100vh;
        min-height: 100vh;
       
      }

    body {
      
        -webkit-font-smoothing: antialiased;
    
        overflow-x: hidden;

        background-color: var(--color-lightgray-2);
        color: var(--color-white);

        margin: 0 auto;
        font-family: 'Poppins', sans-serif;
    }

    main {
        width: 90%;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }

    button, input, textarea,select,option {
        font-family: 'Poppins', sans-serif;
        outline: none;
        border: none;
    }
    input,textarea,select,option{
        background: var(--color-lightgray-1);
        color: var(--color-white);
    }

    p {
        font-family: 'Inter', sans-serif
    }

    @keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading{
  width: 60px;
  height: 60px;
  border-radius:50%;
  animation: spin 1.2s linear infinite;
 
  &::before,
  &::after{
  content: "";
  position: absolute;
  border-radius: inherit;
  }
  &::before{
    width: 100%;
    height: 100%;
   background-image: 
   linear-gradient(0deg,
    var(--color-yellow) 0%,
    var(--color-black) 100%
    );
  }
    &::after{
      width: 85%;
    height: 85%;
    background:var(--color-lightgray-2);
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
  }

  .loadingContainer{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width : 100% ;
  height: 100%;
  position: absolute;
  
  }
`;
