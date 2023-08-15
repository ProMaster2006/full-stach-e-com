export interface IUserinfo {
    user: any;
    isAuth: boolean;
    loading: boolean
}


export type responceUserLogin =  {
    email: string;
    password: string;
    iat: any;
    exp: any
}