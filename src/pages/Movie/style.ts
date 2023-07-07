import { styled } from "styled-components";

export const MovieStyled = styled.div`
  header {
    width: 90%;
    margin: 0 auto;
    z-index: 0;
    @media (min-width: 768px) {
      width: 70%;
    }
  }

  main {
    width: 90%;
    @media (min-width: 768px) {
      width: 70%;
    }
  }

  p {
    &:first-child {
      margin-top: 30px;
    }
  }

  .avaliation__title {
    margin-top: 30px;
    font-size: 1.5rem;
  }

  .noAvaliation__div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .avaliation__button {
    display: flex;
    align-items: center;
    width: max-content;
    height: 40px;
    padding-inline: 10px;
    background-color: var(--color-yellow);
    border-radius: 20px;
    color: var(--color-lightgray-2);
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 700;
  }

  .star {
    width: 22px;
    height: 22px;
    margin-right: 5px;
  }
`;
