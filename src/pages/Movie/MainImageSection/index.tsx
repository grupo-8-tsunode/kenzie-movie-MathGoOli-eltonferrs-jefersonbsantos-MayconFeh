import { useContext } from "react";
import { IMovie } from "../../../providers/@types";
import { StyledSection } from "./style";
import { MovieContext } from "../../../providers/MovieContext";

export const MainImageSection = () => {
  const { actualMovie } = useContext(MovieContext);
  const { image } = actualMovie;

  return <StyledSection image={image}></StyledSection>;
};
