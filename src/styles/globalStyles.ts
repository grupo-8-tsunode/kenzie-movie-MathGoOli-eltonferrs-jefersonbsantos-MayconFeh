import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-yellow: #FFBB38;
    --color-lightgray-1: #3D3D3D;
    --color-lightgray-2: #171717;

}

body{
    background: var(--color-black);
    color: var(--color-white);
}

`