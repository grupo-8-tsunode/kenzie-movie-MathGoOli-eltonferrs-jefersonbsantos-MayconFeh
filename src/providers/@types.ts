import { TypeResgisterFormValue } from "../pages/Register/registerSchema";

export interface IUser {
  email: string;
  name: string;
  id: number;
}
export interface IUserName {
  name: string
  id: number
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


export interface IUserContext{
    isLoading: boolean;
    user: IUser | null;
    loadUser: () => Promise<void>;
    userLoginSubmit: (formData: ISubmit) => Promise<void>;
    userLogoff: () => void;
    userAddReview: (review: IReview, setTargetReviews:React.Dispatch<React.SetStateAction<IReview[] | undefined>>, targetReviews:IReview[] | undefined ) => Promise<void>;
    userEditReview: (review: IReview, movieId: string) => Promise<void>;
    userDeleteReview: (movieId: string) => Promise<void>;
    registerNewuser: (data: TypeResgisterFormValue) => Promise<void>;
    isCreateModal: boolean;
    setIsCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
    isEditModal: boolean;
    setIsEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    getAllUsers: React.Dispatch<React.SetStateAction<IUserName>>;
    allUsers: IUserName[];

  }


export interface IReview {
  length?: any;
  id?: number|undefined|string;
  movieId: number|string|undefined;
  userId: number|string|null;
  score: number|string;
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
    getMovie: (id: number) => Promise<string | IMovie | null | undefined> ;
    getReview: (idMovie: number, idUser: number) => Promise<string | IReview | undefined> ;
    targetReviews: IReview[]| undefined;
    setTargetReviews:  React.Dispatch<React.SetStateAction<IReview[] | undefined>>;
    targetMovie: IMovie | undefined;
    setTargetMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;

}

