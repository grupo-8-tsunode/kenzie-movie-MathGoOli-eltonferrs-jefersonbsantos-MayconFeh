export interface IUser{
    email: string;
    name: string;
    id: number;
}

export interface ILogin{
    accessToken: string;
    user: IUser;
}

export interface IChildren{
    children: React.ReactNode
}

export interface ISubmit{
    email: string;
    password: string;
}

export interface IUserContext{
    isLoading: boolean;
    user: IUser | null;
    loadUser: () => Promise<void>;
    userLoginSubmit: (formData: ISubmit) => Promise<void>;
    userLogoff: () => void;
    userAddReview: (review: IReview) => Promise<void>;
    userEditReview: (review: IReview, movieId: string) => Promise<void>;
    userDeleteReview: (movieId: string) => Promise<void>;
  
  }

export interface IReview{
    movieId: string;
    userId: string;
    score: number;
    description: string;
}

export interface IMovie{
    id: string;
    name: string;
    type: string;
    duration: number;
    synopsis: string;
    image: string;
}