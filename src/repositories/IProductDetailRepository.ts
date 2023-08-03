import { IProductDetail, IProductDetailRequest, IProductDetailUpdateRequest } from '../dtos/ProductDetail'

export interface IProductDetailRepository {
  findById(id: string): Promise<IProductDetail | null>;
  findByProduct(id_product: string): Promise<IProductDetail | null>;
  findAll(): Promise<IProductDetail[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IProductDetailUpdateRequest): Promise<IProductDetail | Error>;
  create(data: IProductDetailRequest): Promise<IProductDetail>;
}