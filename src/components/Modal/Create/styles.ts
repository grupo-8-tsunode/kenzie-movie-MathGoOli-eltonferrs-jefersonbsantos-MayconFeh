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

    .titleModal{
        display: flex;
        justify-content: space-between;
        padding: 40px;
        >h3{
            font-size: 2rem;
        }
    }

    .reviewsModal{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px;
        >select{
            width: 606px;
            height: 70px;
            padding-left: 20px;
            

        }
        >textarea{
            width: 565px;
            height: 200px;
            resize: none;
            padding: 20px;
            &::placeholder{
                color: var(--color-white);
            }
        }
        
    }
`
