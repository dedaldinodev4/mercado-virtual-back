
export interface IUser {
  id?: string;
  username: string;
  email: string;
  password: string;
  status: boolean;
  role: string;
  created_at: Date;
}

export interface IUserRequest {
  username: string;
  email: string;
  password: string;
  status: boolean;
  role: string;
}