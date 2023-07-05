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

    html {
        width: 100vw;
        min-height: 100vh;
        height: max-content;
      }

    body {
        -webkit-font-smoothing: antialiased;
    
        overflow-x: hidden;

        background-color: var(--color-lightgray-2);
        color: var(--color-white);

        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }

    button, input {
        font-family: 'Poppins', sans-serif;
    }

    p {
        font-family: 'Inter', sans-serif
    }
`;
