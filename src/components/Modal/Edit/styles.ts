import { styled } from "styled-components";

export const OverlayEditModalStyled = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);

  > .boxModal {
    width: 95%;
    max-width: 600px;
    height: 610px;
    background-color: var(--color-lightgray-2);
  }

  .titleModal {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    > h3 {
      font-size: 2rem;
    }
  }

  .editModal {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    @media (min-width: 768px) {
      padding: 40px;
    }
    > select {
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      padding-left: 20px;
    }
    > textarea {
      box-sizing: border-box;
      width: 100%;
      height: 200px;
      resize: none;
      padding: 20px;
      &::placeholder {
        color: var(--color-white);
      }
    }
  }
`;
