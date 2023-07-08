import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 1;

  h3 {
    margin-top: 0;
    cursor: pointer;
  }
  > div {
    display: flex;
    gap: 20px;

    a {
      text-decoration: none;
      font-family: Poppins;
      font-size: 17px;
      font-weight: 700;
      line-height: 26px;
      width: max-content;
      padding-inline: 15px;
      background: var(--color-yellow);
      height: 40px;
      border-radius: 255px;
      text-align: center;
      display: flex;
      align-items: center;
      color: var(--color-black);
    }
    a.register {
      background: transparent;
      color: var(--color-white);
      display: none;
      @media (min-width: 600px) {
        display: flex;
      }
    }
  }
`;
