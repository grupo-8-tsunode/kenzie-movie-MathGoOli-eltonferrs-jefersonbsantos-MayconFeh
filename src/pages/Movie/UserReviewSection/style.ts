import { styled } from "styled-components";

export const UserReviewStyled = styled.section`
  h4 {
    font-size: 1rem;
    font-family: "Poppins";
    font-weight: 700;
    margin-top: 10px;
  }
  .buttonIcon {
    color: var(--color-yellow);
  }
  .starIcon {
    color: var(--color-yellow);
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
  .EditReviewSection {
    display: flex;
    flex-direction: column;
  }
  .EditReviewContent {
    display: flex;
    padding: 30px;
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .EditReview__buttons {
    display: flex;
    align-items: center;
  }

  .userReview__span {
    font-weight: 700;
    font-size: 1.1rem;
    font-family: "Poppins";
    margin-right: 15px;
  }
`;
