import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-black: #000000;
        --color-white: #FFFFFF;
        --color-yellow: #FFBB38;
        --color-lightgray-1: #3D3D3D;
        --color-lightgray-2: #171717;
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

        width: 90%;
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
