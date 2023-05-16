import { IProductShop, IProductShopRequest, IProductShopUpdateRequest} from '../dtos/ProductShop'

export interface IProductShopRepository {
  findById(id: string): Promise<IProductShop | null>;
  findByProduct(id_product: string): Promise<IProductShop[]>;
  findByShop(id_shop: string): Promise<IProductShop[]>;
  findAll(): Promise<IProductShop[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IProductShopUpdateRequest): Promise<IProductShop | Error>;
  create(data: IProductShopRequest): Promise<IProductShop>;
}