import { TypeResgisterFormValue } from "../pages/Register/registerSchema";

export interface IUser {
  email: string;
  name: string;
  id: number;
}

export interface ILogin {
  accessToken: string;
  user: IUser;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ISubmit {
  email: string;
  password: string;
}

export interface IUserContext {
  isLoading: boolean;
  user: IUser | null;
  loadUser: () => Promise<void>;
  userLoginSubmit: (formData: ISubmit) => Promise<void>;
  userLogoff: () => void;
  userAddReview: (review: IReview) => Promise<void>;
  userEditReview: (review: IReview, movieId: string) => Promise<void>;
  userDeleteReview: (movieId: string) => Promise<void>;
  registerNewuser: (data: TypeResgisterFormValue) => Promise<void>;
}

export interface IReview {
  length: any;
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export interface IMovie {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
  reviews: IReview[];
}

export interface IMovieContext{
    movies: IMovie[];
    getMovies: () => Promise<void>;
    getMovie: (id: number) => Promise<string | IMovie | undefined> ;
    getReview: (idMovie: number, idUser: number) => Promise<string | IReview | undefined> ;
}

