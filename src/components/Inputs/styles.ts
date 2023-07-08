import { css, styled } from "styled-components";

interface Idiv{
  isregister:boolean;
}
export const InputStyled = styled.input`
  background-color: var(--color-lightgray-1);
  border: none;
  height: 38px;
  width: 95%;
  max-width: 500px;
  padding-left: 10px;
  color: var(--color-white);
  font-family: "Poppins";
  &::placeholder {
    font-size: 0.8rem;
    font-family: "Poppins";
    font-weight: 600;
    color: var(--color-white);
    opacity: 0.8;
  }
  `
export const InputDiv = styled.div<Idiv>`
    display: flex;
    flex-direction:column;
    ${({isregister})=> {if(isregister){return css`@media (min-width: 768px){ width: 48%;}` }}}
    
      
    
      
      
`
