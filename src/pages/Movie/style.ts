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

  .synopsis {
    margin-top: 30px;
  }

  .avaliation__title {
    font-size: 2.5rem;
  }


  .star {
    width: 22px;
    height: 22px;
    margin-right: 5px;
  }
`;
