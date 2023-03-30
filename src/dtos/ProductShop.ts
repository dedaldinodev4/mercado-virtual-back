import { IBaseDTO } from "./Base";

export interface IProductShop extends IBaseDTO, IProductShopRequest {}

export interface IProductShopRequest {
  id_shop: string;
  id_product: string;
}

export interface IProductShopUpdateRequest {
  id_shop: string;
  id_product: string;
}

