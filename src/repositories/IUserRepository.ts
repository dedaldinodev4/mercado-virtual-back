import { IUser, IUserRequest, IUserCredentialsRequest, IUserCredentialsResponse, ICreateUserRequest } from '../dtos/User'

export interface IUserRepository {
  create(data: ICreateUserRequest): Promise<IUser | Error>
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  delete(id: string): Promise<void>;
  update(id: string, user: IUserRequest): Promise<IUser | Error>;
  updateCredentials(id: string, credentials: IUserCredentialsRequest): Promise<IUserCredentialsResponse | Error>;
}