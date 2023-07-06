import { styled } from "styled-components";

interface IProps {
    image: string | null;
}

export const StyledSection = styled.section<IProps>`
    background-image: url(${movie => movie.image});
    background-repeat:no-repeat;
    background-size: cover;
    width: 100%;
    height: 600px;

    div{
        
    }
  `
