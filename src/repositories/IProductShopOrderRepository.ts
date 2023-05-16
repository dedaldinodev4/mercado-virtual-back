import { IProductShopOrder, IProductShopOrderRequest } from '../dtos/ProductShopOrder'

export interface IProductShopOrderRepository {
  findById(id: string): Promise<IProductShopOrder | null>;
  findByProductShop(id_productShop: string): Promise<IProductShopOrder[]>;
  findByOrder(id_order: string): Promise<IProductShopOrder[]>;
  findAll(): Promise<IProductShopOrder[]>;
  delete(id: string): Promise<void>;
  update(id: string, data: IProductShopOrderRequest): Promise<IProductShopOrder | Error>;
  create(data: IProductShopOrderRequest): Promise<IProductShopOrder>;
}