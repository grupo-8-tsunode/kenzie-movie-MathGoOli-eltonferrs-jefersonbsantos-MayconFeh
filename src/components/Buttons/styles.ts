import styled, { css } from "styled-components";

interface IButtonProps{
    buttonSize: "large" | "medium" | "small"
}

export const Button = styled.button<IButtonProps>`
    width:max-content;
    border-radius: 255px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background:var(--color-yellow);

    ${({buttonSize})=>{
        switch(buttonSize){
            case "small":
                return css`
                    padding-inline: 15px;
                    height: 43px
                    
                `
            case "medium":
                return css`
                    padding-inline: 25px;
                    height: 43px
                    
                `
            case "large":
                return css`
                    padding-inline: 30px;
                    height: 43px
                    
                `
        }
    }}


`