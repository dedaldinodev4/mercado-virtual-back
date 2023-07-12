import { IProductCategory, IProductCategoryRequest, IProductCategoryUpdateRequest} from '../dtos/ProductCategory'

export interface IProductCategoryRepository {
  findById(id: string): Promise<IProductCategory | null>;
  findByProduct(id_product: string): Promise<IProductCategory[]>;
  findByCategory(id_category: string): Promise<IProductCategory[]>;
  findAll(): Promise<IProductCategory[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IProductCategoryUpdateRequest): Promise<IProductCategory | Error>;
  create(data: IProductCategoryRequest): Promise<IProductCategory>;
}