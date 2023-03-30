import { ICurrentUser, ISignInRequest, ISignUpRequest } from '../dtos/Auth'

export interface IAuthRepository {
  signUp(user: ISignUpRequest): Promise<ICurrentUser | Error>;
  signIn(credentials: ISignInRequest): Promise<ICurrentUser | Error>;
}