import { IBaseDTO } from "./Base";

export interface IUser extends IBaseDTO, IUserRequest { 
  avatar: string;
  email: string;
}

export interface IUserRequest {
  username: string;
  status: boolean;
  role: string;
}

export interface IUserCredentialsRequest {
  email: string;
  password: string;
}

export interface IUserCredentialsResponse {
  message: string;
  user: { email: string; }
}

export interface ICreateUserRequest {
  username: string;
  email: string;
  password: string;
  role: string;
  status: boolean;
  avatar: string;
}
