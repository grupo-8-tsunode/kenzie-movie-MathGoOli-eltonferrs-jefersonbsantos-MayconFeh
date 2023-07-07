import { styled } from "styled-components";

export const AllReviewStyled = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    gap: 50px;
    margin-top: 30px;
    @media (min-width: 768px) {
      justify-content: space-around;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 300px;
    @media (min-width: 768px) {
      min-width: 300px;
    }
  }

  .avaliation__div {
    width: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user {
    width: 50px;
    height: 50px;
    background-color: var(--color-yellow);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1.8rem;
  }

  .star {
    width: 30px;
    height: 30px;
    color: var(--color-yellow);
  }

  .score {
    font-family: "Poppins";
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    align-self: flex-start;
  }

  h4 {
    font-family: "Poppins";
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
