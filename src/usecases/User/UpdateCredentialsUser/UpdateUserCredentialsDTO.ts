
export interface IUpdateUserCredentialsRequest {
  email: string;
  password: string;
}



export interface IUpdateUserCredentials {
  message: string;
  user: { 
    email: string;
  }
}

