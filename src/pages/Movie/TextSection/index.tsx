import { IMovie } from "../../../providers/@types";

interface ISection {
    movie: string | IMovie | null | undefined;
}

export const TextSection = ({movie}: ISection ) => {

    if (typeof movie === "object" && movie !== null) {
    return (
        <p>{movie.synopsis}</p>
    )
    }
}