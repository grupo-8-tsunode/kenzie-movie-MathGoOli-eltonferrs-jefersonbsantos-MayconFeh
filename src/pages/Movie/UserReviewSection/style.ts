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
  .starIcon{
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
  .EditReviewSection{
    display: flex;
  }
  .EditReviewContent{
    display: flex;
    padding: 30px;
    justify-content: space-between;
  }
  .EditReview__buttons{
    display: flex;
  }
`;
