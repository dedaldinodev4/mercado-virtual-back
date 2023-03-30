import { IProduct, IProductRequest, IProductUpdateRequest} from '../dtos/Product'

export interface IProductRepository {
  findByName(name: string): Promise<IProduct | null>;
  findById(id: string): Promise<IProduct | null>;
  findAll(): Promise<IProduct[]>;
  findByCategory(category: string): Promise<IProduct[]>
  delete(id: string): Promise<void>;
  update(id: string, data: IProductUpdateRequest): Promise<IProduct | Error>;
  create(data: IProductRequest): Promise<IProduct | Error>;
}