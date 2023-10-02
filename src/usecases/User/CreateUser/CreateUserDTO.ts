
export interface ICreateUserRequest {
  username: string;
  status: boolean;
  role: string;
  password: string;
  avatar: string;
  email: string;
}



export interface ICreateUser {
  id: string;
  username: string;
  status: boolean;
  role: string;
  avatar: string;
  email: string;
  created_at: Date;
}

