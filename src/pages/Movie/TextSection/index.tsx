import { IMovie } from "../../../providers/@types";
import { PStyled } from "../../../styles/typography";

interface ISection {
  movie: string | IMovie | null | undefined;
}

export const TextSection = ({ movie }: ISection) => {
  if (typeof movie === "object" && movie !== null) {
    return <PStyled>"{movie.synopsis}"</PStyled>;
  }
};
