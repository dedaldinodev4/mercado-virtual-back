import { IUser, IUserRequest } from '../dtos/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | Error>;
  findById(id: string): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  delete(id: string): Promise<void>;
  update(id: string, user: IUserRequest): Promise<IUser | Error>;
}