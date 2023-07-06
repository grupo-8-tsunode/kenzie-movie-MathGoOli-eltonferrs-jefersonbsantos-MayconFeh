import { styled } from "styled-components";

export const OverlayModalStyled = styled.div`
    position: fixed;
    
    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0,0,0,.3);

    >.boxModal{
        width: 741px;
        height: 610px;
        background-color: var(--color-lightgray-2);



    }
`
