import { IBaseDTO } from "./Base";

export interface IUser extends IBaseDTO, IUserRequest {}

export interface IUserRequest {
  username: string;
  email: string;
  password: string;
  status: boolean;
  role: string;
}