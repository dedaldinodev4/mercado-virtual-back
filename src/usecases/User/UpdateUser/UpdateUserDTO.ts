
export interface IUpdateUserRequest {
  username: string;
  status: boolean;
  role: string;
}



export interface IUpdateUser extends IUpdateUserRequest {
  id: string;
  created_at: Date;
}

