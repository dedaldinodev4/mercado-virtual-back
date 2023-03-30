import { ICategory, ICategoryRequest } from '../dtos/Category'

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategory | null>;
  findById(id: string): Promise<ICategory | null>;
  findAll(): Promise<ICategory[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: ICategoryRequest): Promise<ICategory | Error>;
  create(data: ICategoryRequest): Promise<ICategory | Error>;
}