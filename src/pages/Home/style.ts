import { styled } from "styled-components";

export const HomeStyled = styled.div`
  margin: 0 auto;

  header {
    width: 90%;
    margin: 0 auto;
  }

  .homeHeader__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
  }

  .logo {
    width: 80px;
    height: 15px;
  }

  .signUp__button {
    display: none;
  }

  .singIn__button {
    width: 80px;
    height: 30px;
    background-color: var(--color-yellow);
    border: 1px solid var(--color-yellow);
    border-radius: 20px;
    font-weight: 700;
    font-size: 17px;
  }

  a {
    font-family: "Poppins";
    color: var(--color-black);
    text-decoration: none;
    padding-inline: 15px;
  }

  .homeMain__container {
    margin-top: 20px;
  }

  .cards__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .card__movie {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .movie__img {
    width: 290px;
    height: 165px;
    border-radius: 20px;
  }

  .genre-duration__div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .movie__genre {
    display: flex;
    align-items: center;
    width: max-content;
    height: 25px;
    background-color: var(--color-yellow);
    padding-inline: 15px;
    color: var(--color-black);
    border-radius: 20px;
    font-weight: 700;
    font-size: 17px;
    font-family: "Poppins", sans-serif;
  }

  .movie__duration {
    font-size: 17px;
    font-family: Inter;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 0.5);
  }

  .movieTitle-avaliation__div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .movie__title {
    font-size: 1.3rem;
    line-height: 20px;
  }

  .avaliation__div {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .star {
    width: 30px;
    height: 30px;
  }

  .avaliation {
    font-family: "Poppins";
    font-weight: 700;
    size: 21px;
  }

  .star {
    width: 28px;
    height: 28px;
    color: var(--color-yellow);
  }
  .fullstar {
    width: 28px;
    height: 28px;
    color: var(--color-yellow);
  }
`;
