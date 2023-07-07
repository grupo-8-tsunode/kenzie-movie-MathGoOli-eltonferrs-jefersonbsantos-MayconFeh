import { styled } from "styled-components";



export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .5rem;
    }

    span{
        font-size: .8rem;
    }

    .profilePic{
        width: 2rem;
        height: 2rem;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-yellow);
    }

    button{
        font-size: .8rem;
        color: var(--color-white);
    }


`