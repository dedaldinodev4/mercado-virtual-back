import { Request } from 'express'

export interface IUser {
  id?: string;
  email: string;
  status: boolean;
  role: string;
}

export interface IAuthRequest extends Request{
  user: IUser
}

export interface ICurrentUser {
  user: IUser;
  token: string;
}

export interface ISignInRequest {
  email?:string;
  username?:string;
  password:string;
} 

export interface ISignUpRequest {
  email:string;
  username:string;
  password:string;
  role: string;
  status: boolean;
  avatar: string;
}

