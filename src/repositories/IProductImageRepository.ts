import { IProductImage, IProductImageRequest } from '../dtos/ProductImage'

export interface IProductImageRepository {
  findById(id: string): Promise<IProductImage | null>;
  findByUrl(url: string): Promise<IProductImage | null>;
  findByProduct(id_product: string): Promise<IProductImage[]>;
  findAll(): Promise<IProductImage[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IProductImageRequest): Promise<IProductImage | Error>;
  create(data: IProductImageRequest): Promise<IProductImage>;
  getImage(id_image: string):Promise<any>;
}