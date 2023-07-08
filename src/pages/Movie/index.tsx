import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../providers/MovieContext";
import { IMovie } from "../../providers/@types";

import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { MainImageSection } from "./MainImageSection";

import { TextSection } from "./TextSection";
import { UserReviewSection } from "./UserReviewSection";
import { AllReviews } from "./AllReviews";

import { MovieStyled } from "./style";
import { Footer } from "../../components/Footer/Index";


export const Movie = () => {
  const { getMovie, targetMovie } = useContext(MovieContext);
  const [movie, setMovie] = useState<string | IMovie | undefined | null>(null);
  const { id } = useParams();
  //const {targetReview, setTargetReview}= useContext(MovieContext)


  useEffect(() => {
    const loadMovie = async () => {
      if(targetMovie){
        setMovie(targetMovie);
      } else{
        const movieId = Number(id);
        const data = await getMovie(movieId);
        setMovie(data);
      }

    };

    loadMovie();
  }, []);

  if (typeof movie === "object" && movie !== null) {
    return (
      <MovieStyled>
        <Header />
        <MainImageSection movie={movie} />
        <main>
          <TextSection movie={movie} />
          
          <div >
            <UserReviewSection movie={movie} />

          </div>
          <AllReviews movie={movie} />
          
        </main>
        <Footer />
      </MovieStyled>
    );
  }
  return (
    <>
       <div className="loadingContainer">
          <div className="loading"/>
        </div> 
    </>
  );
};
