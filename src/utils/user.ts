import { IUser } from "../dtos/User";

interface IUserResponse extends IUser {
  password: string;
}

export const serializeUser = (user: IUserResponse): IUser => {
  return {
    email: user.email,
    username: user.username,
    status: user?.status,
    role: user.role,
    id: user.id,
    created_at: user.created_at,
    avatar: user.avatar
  }
}