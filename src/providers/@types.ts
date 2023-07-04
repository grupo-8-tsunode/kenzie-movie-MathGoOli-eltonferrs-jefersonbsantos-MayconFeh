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

export interface IReview{
    movieId: string;
    userId: string;
    score: number;
    description: string;
}