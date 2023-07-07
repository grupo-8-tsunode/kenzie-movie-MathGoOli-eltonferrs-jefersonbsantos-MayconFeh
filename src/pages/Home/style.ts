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

  a {
    font-family: "Poppins";
    color: var(--color-black);
    text-decoration: none;
    /* padding-inline: 15px; */
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
    width: 100%;
    max-width: 500px;
    height: fit-content;
    margin: 0 auto;
  }

  .movie__img {
    width: 100%;
    max-height: 260px;
    border-radius: 30px;
  }

  .genre-duration__div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
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
  .imgLink {
    width: max-content;
  }

  @media (min-width: 768px) {
    .cards__container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 250px;
      height: max-content;
      max-width: 1100px;
      margin: 0 auto;
    }

    header {
      width: 70%;
    }

    main {
      width: 70%;
      height: 80vh;
    }

    .card__movie {
      max-width: 100%;
      height: auto;
      &:first-child {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
        height: 100%;
        img {
          display: flex;
          max-height: 400px;
          border-radius: 40px;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
