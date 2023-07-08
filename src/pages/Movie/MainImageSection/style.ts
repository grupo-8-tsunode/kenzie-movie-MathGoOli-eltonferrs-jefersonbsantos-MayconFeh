import { styled } from "styled-components";

interface IProps {
  image: string | null;
}

export const StyledSection = styled.section<IProps>`
  width: 100%;
  height: 400px;
  margin-top: -100px;
  @media (min-width: 768px) {
    height: clamp(37.5rem, 29.1667rem + 17.3611vw, 50rem);
  }

  box-sizing: border-box;

  background-image: url(${(movie) => movie.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  z-index: -2;
  .outdiv {
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem 2rem;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 70%,
      rgba(0, 0, 0, 0) 100%
    );
    @media (min-width: 768px) {
      padding: 0 15% 1rem 15%;
      margin: 0 auto;
      margin-top: 100px;
    }
  }
  .innerdiv {
    display: flex;
    flex-direction: column;
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
    font-size: 1.0625rem;
    font-family: "Poppins", sans-serif;
  }

  .avaliation {
    font-family: "Poppins";
    font-weight: 700;
    size: 1.3125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding-bottom: 8px;
    width: 60px;
  }

  .star {
    color: var(--color-yellow);
    width: 30px;
    height: 30px;
  }
`;
