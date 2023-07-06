import { styled } from "styled-components";

interface IProps {

    image: string | null;
}

export const StyledSection = styled.section<IProps>`
    width: 100%;
    height: 400px;

    box-sizing: border-box;


    background-image: url(${movie => movie.image});
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;



    display: flex;



    .outdiv{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        padding: 0 1rem 2rem;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 70%, rgba(0,0,0,.2) 100%);   
    
    
    }
    .innerdiv{
        display: flex;
        flex-direction: column;
    }
  `

